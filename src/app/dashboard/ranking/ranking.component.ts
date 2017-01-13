import { Component } from '@angular/core';
import { Partida, Jogador, JogoFinalizadoToSave } from '../game/partida';
import { ActivatedRoute } from '@angular/router';
import {Http, Response, Headers} from "@angular/http";
import { Player } from '../players/player';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})



export class RankingComponent {
    public rankingPlayers: Array<any>;
    public outRanking: Array<any>;
    public rankingPlayersGK: Array<any>;
    public outRankingGK: Array<any>;
    countAssistent: Function = Array;
    year: string;
    private sub: any;

    public constructor(private route: ActivatedRoute, private http: Http) {
    }

    ngOnInit() {
        this.rankingPlayers = new Array<any>();
        this.outRanking = new Array<any>();
        this.rankingPlayersGK = new Array<any>();
        this.outRankingGK = new Array<any>();
        this.sub = this.route.params.subscribe(params => {
            this.rankingPlayers = new Array<any>();
            this.outRanking = new Array<any>();
            this.rankingPlayersGK = new Array<any>();
            this.outRankingGK = new Array<any>();
            this.year = params['year'];
            if (this.year) {
                var param = this.year;
                if (this.year == 'atual') {
                    param = '0';
                }

                this.http.get('http://localhost:65248/api/Ranking/' + param).map((res: Response) => res.json())
                    .subscribe((items: Array<any>) => {
                        for (let plr in items) {
                            if (items[plr].ranking) {
                                if (items[plr].goleiro)
                                    this.rankingPlayersGK.push(items[plr]);
                                else
                                    this.rankingPlayers.push(items[plr]);
                            }
                            else {
                                if (items[plr].goleiro)
                                    this.outRankingGK.push(items[plr]);
                                else
                                    this.outRanking.push(items[plr]);
                            }
                        }
                        this.rankingPlayers = this.rankingPlayers.sort((n1, n2) => {
                            if (n1.Pontos > n2.Pontos) {
                                return -1;
                            }

                            if (n1.Pontos < n2.Pontos) {
                                return 1;
                            }

                            return 0;
                        });
                        this.outRanking = this.outRanking.sort((n1, n2) => {
                            if (n1.Pontos > n2.Pontos) {
                                return -1;
                            }

                            if (n1.Pontos < n2.Pontos) {
                                return 1;
                            }

                            return 0;
                        });
                    });
            }
        });
    }

    selectChangeGK(item) {

    }

    selectChange(item) {
        switch (item.index) {
            case 0:
                this.rankingPlayers = this.rankingPlayers.sort((n1, n2) => {
                    if (n1.Pontos > n2.Pontos) {
                        return -1;
                    }

                    if (n1.Pontos < n2.Pontos) {
                        return 1;
                    }

                    return 0;
                });
                this.outRanking = this.outRanking.sort((n1, n2) => {
                    if (n1.Pontos > n2.Pontos) {
                        return -1;
                    }

                    if (n1.Pontos < n2.Pontos) {
                        return 1;
                    }

                    return 0;
                });
                break;
            case 1:
                this.rankingPlayers = this.rankingPlayers.sort((n1, n2) => {
                    if (n1.MediaPontos > n2.MediaPontos) {
                        return -1;
                    }

                    if (n1.MediaPontos < n2.MediaPontos) {
                        return 1;
                    }

                    return 0;
                });
                this.outRanking = this.outRanking.sort((n1, n2) => {
                    if (n1.MediaPontos > n2.MediaPontos) {
                        return -1;
                    }

                    if (n1.MediaPontos < n2.MediaPontos) {
                        return 1;
                    }

                    return 0;
                });
                break;
            case 2:
                this.rankingPlayers = this.rankingPlayers.sort((n1, n2) => {
                    if (n1.Gp > n2.Gp) {
                        return -1;
                    }

                    if (n1.Gp < n2.Gp) {
                        return 1;
                    }

                    return 0;
                });
                this.outRanking = this.outRanking.sort((n1, n2) => {
                    if (n1.Gp > n2.Gp) {
                        return -1;
                    }

                    if (n1.Gp < n2.Gp) {
                        return 1;
                    }

                    return 0;
                });
                break;
            case 3:
                this.rankingPlayers = this.rankingPlayers.sort((n1, n2) => {
                    if (n1.ast > n2.ast) {
                        return -1;
                    }

                    if (n1.ast < n2.ast) {
                        return 1;
                    }

                    return 0;
                });
                this.outRanking = this.outRanking.sort((n1, n2) => {
                    if (n1.ast > n2.ast) {
                        return -1;
                    }

                    if (n1.ast < n2.ast) {
                        return 1;
                    }

                    return 0;
                });
                break;
            case 4:
                this.rankingPlayers = this.rankingPlayers.sort((n1, n2) => {
                    if (n1.jogos > n2.jogos) {
                        return -1;
                    }

                    if (n1.jogos < n2.jogos) {
                        return 1;
                    }

                    return 0;
                });
                this.outRanking = this.outRanking.sort((n1, n2) => {
                    if (n1.jogos > n2.jogos) {
                        return -1;
                    }

                    if (n1.jogos < n2.jogos) {
                        return 1;
                    }

                    return 0;
                });
                break;
            case 5:
                this.rankingPlayers = this.rankingPlayers.sort((n1, n2) => {
                    if (n1.Vitorias > n2.Vitorias) {
                        return -1;
                    }

                    if (n1.Vitorias < n2.Vitorias) {
                        return 1;
                    }

                    return 0;
                });
                this.outRanking = this.outRanking.sort((n1, n2) => {
                    if (n1.Vitorias > n2.Vitorias) {
                        return -1;
                    }

                    if (n1.Vitorias < n2.Vitorias) {
                        return 1;
                    }

                    return 0;
                });
                break;
            case 6:
                this.rankingPlayers = this.rankingPlayers.sort((n1, n2) => {
                    if (n1.Empates > n2.Empates) {
                        return -1;
                    }

                    if (n1.Empates < n2.Empates) {
                        return 1;
                    }

                    return 0;
                });
                this.outRanking = this.outRanking.sort((n1, n2) => {
                    if (n1.Empates > n2.Empates) {
                        return -1;
                    }

                    if (n1.Empates < n2.Empates) {
                        return 1;
                    }

                    return 0;
                });
                break;
            case 7:
                this.rankingPlayers = this.rankingPlayers.sort((n1, n2) => {
                    if (n1.Derrotas > n2.Derrotas) {
                        return -1;
                    }

                    if (n1.Derrotas < n2.Derrotas) {
                        return 1;
                    }

                    return 0;
                });
                this.outRanking = this.outRanking.sort((n1, n2) => {
                    if (n1.Derrotas > n2.Derrotas) {
                        return -1;
                    }

                    if (n1.Derrotas < n2.Derrotas) {
                        return 1;
                    }

                    return 0;
                });
                break;
            case 8:
                this.rankingPlayers = this.rankingPlayers.sort((n1, n2) => {
                    if (n1.gc > n2.gc) {
                        return -1;
                    }

                    if (n1.gc < n2.gc) {
                        return 1;
                    }

                    return 0;
                });
                this.outRanking = this.outRanking.sort((n1, n2) => {
                    if (n1.gc > n2.gc) {
                        return -1;
                    }

                    if (n1.gc < n2.gc) {
                        return 1;
                    }

                    return 0;
                });
                break;
        }
        //this.selectedGame = this.jogos[item.index];
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
