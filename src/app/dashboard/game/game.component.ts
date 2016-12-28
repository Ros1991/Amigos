import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Partida } from './partida';
import { Jogador } from './partida';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss', './dragula.min.css',
        './dragula.css']
})



export class GameComponent {


    public ordemDeChegada: Array<any> = [

    ];
    public proximos: Array<Jogador>;
    public jogosFinalizados: Array<Partida>;
    newPlayer: any;
    Current: Partida;
    showMenu: string = '';
    countAssistent: Function = Array;
    desmarcarClick: boolean;
    time1Goals: number;
    time2Goals: number;


    createFake() {
        this.newPlayer = 'Acival';
        this.addPlayerToOrder();
        this.newPlayer = 'Wilker';
        this.addPlayerToOrder();
        this.newPlayer = 'Marcelo R';
        this.addPlayerToOrder();
        this.newPlayer = 'Marcelao';
        this.addPlayerToOrder();
        this.newPlayer = 'Filipe S';
        this.addPlayerToOrder();
        this.newPlayer = 'Paulao';
        this.addPlayerToOrder();
        this.newPlayer = 'Felipe P';
        this.addPlayerToOrder();
        this.newPlayer = 'Antonio';
        this.addPlayerToOrder();
        this.newPlayer = 'Cordeiro';
        this.addPlayerToOrder();
        this.newPlayer = 'Vassoler';
        this.addPlayerToOrder();
        this.newPlayer = 'Klayton';
        this.addPlayerToOrder();
        this.newPlayer = 'Leo A';
        this.addPlayerToOrder();
        this.newPlayer = 'Marcelo M';
        this.addPlayerToOrder();
        this.newPlayer = 'Diego';
        this.addPlayerToOrder();
        this.newPlayer = 'Paulinho';
        this.addPlayerToOrder();
        this.newPlayer = 'Drogbar';
        this.addPlayerToOrder();
        this.newPlayer = 'Tiago';
        this.addPlayerToOrder();
        this.newPlayer = 'Vinicius';
        this.addPlayerToOrder();
        this.newPlayer = 'Marcus';
        this.addPlayerToOrder();
        this.newPlayer = 'Felipe M';
        this.addPlayerToOrder();
        this.newPlayer = 'Amilton';
        this.addPlayerToOrder();
        this.newPlayer = 'Leo B';
        this.addPlayerToOrder();
        this.newPlayer = 'Rochinha';
        this.addPlayerToOrder();
    }


    constructor(private dragulaService: DragulaService) {
        dragulaService.setOptions('first-bag', {
            removeOnSpill: true
        });
        this.time1Goals = 0;
        this.time2Goals = 0;
        this.Current = new Partida;
        this.desmarcarClick = false;
        this.jogosFinalizados = new Array<Partida>();
        this.proximos = new Array<Jogador>();
        this.Current.time1 = [];
        this.Current.time2 = [];
        this.createFake();
    }

    addPlayerToOrder() {
        if (this.newPlayer && this.newPlayer != '') {
            var newId = Math.floor(Math.random() * 100000000) + 1;
            this.ordemDeChegada.push({ id: newId, name: this.newPlayer });
            this.addPlayerToGame(newId, this.newPlayer);
            this.newPlayer = '';
        }
    }

    addExpandClass(element: any) {
        if (this.desmarcarClick === true) {
            this.desmarcarClick = false;
            return;
        }
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }


    addPlayerToGame(id, name) {
        if (this.Current.time1.length < this.Current.numDeJog || this.Current.time2.length < this.Current.numDeJog) {
            if (this.Current.time1.length == this.Current.time2.length) {
                this.Current.time1.push({ id: id, name: name, gols: 0, assistencias: 0, golsContra: 0 });
            }
            else {
                this.Current.time2.push({ id: id, name: name, gols: 0, assistencias: 0, golsContra: 0 });
            }
        }
        else {
            this.proximos.push({ id: id, name: name, gols: 0, assistencias: 0, golsContra: 0 });
        }
    }
    


    marcarGol(aa) {
        var found = false;
        for (var i in this.Current.time1) {
            if (this.Current.time1[i].id == aa) {
                this.Current.time1[i].gols = this.Current.time1[i].gols + 1;
                found = true;
                break; //Stop this loop, we found it!
            }
        }
        if (!found) {
            for (var i in this.Current.time2) {
                if (this.Current.time2[i].id == aa) {
                    this.Current.time2[i].gols = this.Current.time2[i].gols + 1;
                    found = true;
                    break; //Stop this loop, we found it!
                }
            }
        }
        this.time1Goals = this.Current.time1Goals();
        this.time2Goals = this.Current.time2Goals();
    }

    desmarcarGol(aa) {
        this.desmarcarClick = true;
        var found = false;
        for (var i in this.Current.time1) {
            if (this.Current.time1[i].id == aa) {
                this.Current.time1[i].gols = this.Current.time1[i].gols - 1;
                found = true;
                break; //Stop this loop, we found it!
            }
        }
        if (!found) {
            for (var i in this.Current.time2) {
                if (this.Current.time2[i].id == aa) {
                    this.Current.time2[i].gols = this.Current.time2[i].gols - 1;
                    found = true;
                    break; //Stop this loop, we found it!
                }
            }
        }
        this.time1Goals = this.Current.time1Goals();
        this.time2Goals = this.Current.time2Goals();
    }

    marcarGolContra(aa) {
        var found = false;
        for (var i in this.Current.time1) {
            if (this.Current.time1[i].id == aa) {
                this.Current.time1[i].golsContra = this.Current.time1[i].golsContra + 1;
                found = true;
                break; //Stop this loop, we found it!
            }
        }
        if (!found) {
            for (var i in this.Current.time2) {
                if (this.Current.time2[i].id == aa) {
                    this.Current.time2[i].golsContra = this.Current.time2[i].golsContra + 1;
                    found = true;
                    break; //Stop this loop, we found it!
                }
            }
        }
        this.time1Goals = this.Current.time1Goals();
        this.time2Goals = this.Current.time2Goals();
    }

    marcarGolAssist(aa) {
        var found = false;
        for (var i in this.Current.time1) {
            if (this.Current.time1[i].id == aa) {
                this.Current.time1[i].assistencias = this.Current.time1[i].assistencias + 1;
                found = true;
                break; //Stop this loop, we found it!
            }
        }
        if (!found) {
            for (var i in this.Current.time2) {
                if (this.Current.time2[i].id == aa) {
                    this.Current.time2[i].assistencias = this.Current.time2[i].assistencias + 1;
                    found = true;
                    break; //Stop this loop, we found it!
                }
            }
        }
    }

    desmarcarGolContra(aa) {
        this.desmarcarClick = true;
        var found = false;
        for (var i in this.Current.time1) {
            if (this.Current.time1[i].id == aa) {
                this.Current.time1[i].golsContra = this.Current.time1[i].golsContra - 1;
                found = true;
                break; //Stop this loop, we found it!
            }
        }
        if (!found) {
            for (var i in this.Current.time2) {
                if (this.Current.time2[i].id == aa) {
                    this.Current.time2[i].golsContra = this.Current.time2[i].golsContra - 1;
                    found = true;
                    break; //Stop this loop, we found it!
                }
            }
        }
        this.time1Goals = this.Current.time1Goals();
        this.time2Goals = this.Current.time2Goals();
    }

    desmarcarGolAssist(aa) {
        this.desmarcarClick = true;
        var found = false;
        for (var i in this.Current.time1) {
            if (this.Current.time1[i].id == aa) {
                this.Current.time1[i].assistencias = this.Current.time1[i].assistencias - 1;
                found = true;
                break; //Stop this loop, we found it!
            }
        }
        if (!found) {
            for (var i in this.Current.time2) {
                if (this.Current.time2[i].id == aa) {
                    this.Current.time2[i].assistencias = this.Current.time2[i].assistencias - 1;
                    found = true;
                    break; //Stop this loop, we found it!
                }
            }
        }
    }
}
