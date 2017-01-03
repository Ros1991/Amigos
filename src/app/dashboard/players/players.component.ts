import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Http, Response} from "@angular/http";
import { Player } from './player';


import 'rxjs/add/operator/map';



@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent{
    allowEdit: boolean;
    id: number;
    private sub: any;
    jogadores: Array<Player>;
    public mensalistas: Array<Player>;
    public convidados: Array<Player>;

    constructor(private route: ActivatedRoute, private http: Http) {
        this.jogadores = new Array<Player>();
        this.mensalistas = new Array<Player>();
        this.convidados = new Array<Player>();
        
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.allowEdit = params['allowEdit'] === 'true';
        });

        this.http.get('http://localhost:65248/api/Players').map((res: Response) => res.json())
            .subscribe((items: Array<Player>) => {
                this.jogadores = items;
                for (let plr in this.jogadores) {
                    if (this.jogadores[plr].Subscriber) {
                        this.mensalistas.push(this.jogadores[plr]);
                    }
                    else {
                        this.convidados.push(this.jogadores[plr]);
                    }
                }
            });
    }

    getPosition(position: string) {
        switch (position.toUpperCase()) {
            case 'G':
                return 'Goleiro';
            case 'Z':
                return 'Zagueiro';
            case 'M':
                return 'Meio campista';
            case 'A':
                return 'Atacante';
        }
        return '';
    }

    getAge(birthDay: string) {
        var today = new Date();
        var birthDate = new Date(birthDay);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}
