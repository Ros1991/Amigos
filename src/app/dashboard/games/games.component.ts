import { Component } from '@angular/core';
import { Partida, Jogador, JogoFinalizadoToSave } from '../game/partida';

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
    countAssistent: Function = Array;

    public constructor(private http: Http) {
    }

    ngOnInit() {
        this.jogos = new Array<JogoFinalizadoToSave>();
        this.http.get('http://localhost:65248/api/Games').map((res: Response) => res.json())
            .subscribe((items: Array<JogoFinalizadoToSave>) => {
                this.jogos = items;
            });
    }

    pegaLinhas(item) {
        return 6;
    }

    time1Goals(item) {
        return 2;
    }
    time2Goals(item) {
        return 1;
    }
}
