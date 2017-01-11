import { Component } from '@angular/core';
import { Partida, Jogador, JogoFinalizadoToSave } from '../game/partida';
import { ActivatedRoute } from '@angular/router';

import {Http, Response, Headers} from "@angular/http";

import { Player } from '../players/player';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})



export class GamesComponent {
    public jogos: Array<JogoFinalizadoToSave>;
    public selectedGame: JogoFinalizadoToSave;
    countAssistent: Function = Array;
    year: number;
    private sub: any;

    public constructor(private route: ActivatedRoute, private http: Http) {
    }

    ngOnInit() {
        this.jogos = new Array<JogoFinalizadoToSave>();
        this.selectedGame = new JogoFinalizadoToSave();
        this.sub = this.route.params.subscribe(params => {
            this.year = +params['year'];
            if (this.year) {
                this.http.get('http://localhost:65248/api/Games/' + this.year).map((res: Response) => res.json())
                    .subscribe((items: Array<JogoFinalizadoToSave>) => {
                        this.jogos = items;
                        this.selectedGame = this.jogos[0];
                    });
            }
        });
    }

    selectChange(item) {
        this.selectedGame = this.jogos[item.index];
    }

    pegaLinhas(item) {
        if (item.time1.length > item.time2.length) {
            return item.time1.length;
        }
        if (item.time2.length > item.time1.length) {
            return item.time2.length;
        }
        return item.time1.length;
    }

    time1Goals(item) {
        var total = 0;
        for (var i in item.time1) {
            total = total + item.time1[i].gols;
        }
        for (var i in item.time2) {
            total = total + item.time2[i].golsContra;
        }
        if (item.goleiroTime1) {
            total = total + item.goleiroTime1.gols;
        }
        if (item.goleiroTime2) {
            total = total + item.goleiroTime2.golsContra;
        }
        return total;
    }
    time2Goals(item) {
        var total = 0;
        for (var i in item.time2) {
            total = total + item.time2[i].gols;
        }
        for (var i in item.time1) {
            total = total + item.time1[i].golsContra;
        }
        if (item.goleiroTime1) {
            total = total + item.goleiroTime1.golsContra;
        }
        if (item.goleiroTime2) {
            total = total + item.goleiroTime2.gols;
        }
        return total;
    }
}
