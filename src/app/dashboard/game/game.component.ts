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
    isGoalkeeper: boolean;

    confNumberPlayers: number;
    confPrimeiraDuasPartidas: boolean;
    confShow: boolean;

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
        dragulaService.setOptions('second-bag', {
            removeOnSpill: true
        });
        this.isGoalkeeper = false;

        this.confNumberPlayers = 6;
        this.confPrimeiraDuasPartidas = true;
        this.confShow = false;

        this.time1Goals = 0;
        this.time2Goals = 0;
        this.Current = new Partida;
        this.Current.numDeJog = this.confNumberPlayers;
        this.desmarcarClick = false;
        this.jogosFinalizados = new Array<Partida>();
        this.proximos = new Array<Jogador>();
        this.Current.time1 = [];
        this.Current.time2 = [];
        this.createFake();
    }


    showConfig() {
        this.confShow = !this.confShow;
    }

    applyConfig() {
        var proximosTemp = Array<Jogador>();
        if (+this.confNumberPlayers > +this.Current.numDeJog) {
            this.Current.numDeJog = this.confNumberPlayers;
            do {
                var nextPlayer = '';
                for (let plr in this.proximos) {
                    if (!this.proximos[plr].goleiro) {
                        nextPlayer = plr;
                        break;
                    }
                }
                if (nextPlayer != '') {
                    this.addPlayerToGame(this.proximos[nextPlayer].id, this.proximos[nextPlayer].name, false);
                    this.proximos.splice(+nextPlayer, 1);
                }
            }
            while ((this.Current.time1.length < this.confNumberPlayers || this.Current.time2.length < this.confNumberPlayers) && nextPlayer != '');
        } else if (+this.confNumberPlayers < +this.Current.numDeJog) {
            this.Current.numDeJog = this.confNumberPlayers;
            do {
                if (this.Current.time2.length > +this.Current.numDeJog && this.Current.time2.length == this.Current.time1.length) {
                    var player = this.Current.time2.pop();
                    this.proximos.unshift(player);
                }
                if (this.Current.time1.length > +this.Current.numDeJog) {
                    var player = this.Current.time1.pop();
                    this.proximos.unshift(player);
                }
            } while (this.Current.time1.length > +this.Current.numDeJog);
        }
        this.confShow = false;
    }


    tirarAzul() {
        this.proximos = this.proximos.concat(this.Current.time1);
        this.Current.time1 = new Array<Jogador>();
        if (this.Current.goleiroTime1)
            this.proximos.push(this.Current.goleiroTime1);
        this.Current.goleiroTime1 = null;
        this.time1Goals = this.Current.time1Goals();
        this.showMenu = '0';
        this.confShow = false;
        this.preencherTimesComProximos();
    }

    tirarAmarelo() {
        this.proximos = this.proximos.concat(this.Current.time2);
        this.Current.time2 = new Array<Jogador>();
        if (this.Current.goleiroTime2)
            this.proximos.push(this.Current.goleiroTime2);
        this.Current.goleiroTime2 = null;
        this.time2Goals = this.Current.time2Goals();
        this.showMenu = '0';
        this.confShow = false;
        this.preencherTimesComProximos();
    }

    renew(jogador) {
        jogador.gols = 0;
        jogador.golsContra = 0;
        jogador.assistencias = 0;
        return jogador;
    }

    renewList(jogadores) {
        for (var i in jogadores) {
            jogadores[i].gols = 0;
            jogadores[i].golsContra = 0;
            jogadores[i].assistencias = 0;
        }
        return jogadores();
    }

    finalizarJogo() {
        this.Current.proximas = this.proximos;
        this.jogosFinalizados.push(this.Current);
        var novoJogo = new Partida();
        if ((this.Current.time1Goals() > this.Current.time2Goals()) || (this.Current.time2Goals() == this.Current.time1Goals() && this.Current.timeVantagem == 1 && this.proximos.length < 10)) {
            novoJogo.time1 = this.renewList(this.Current.time1);
            novoJogo.goleiroTime1 = this.Current.goleiroTime1;
            this.proximos = this.proximos.concat(this.Current.time2);
            if (this.Current.goleiroTime2)
                this.proximos.push(this.Current.goleiroTime2);
            novoJogo.timeVantagem = 2;
        }
        if ((this.Current.time2Goals() > this.Current.time1Goals()) || (this.Current.time2Goals() == this.Current.time1Goals() && this.Current.timeVantagem == 2 && this.proximos.length < 10)) {
            novoJogo.time2 = this.renewList(this.Current.time2);
            novoJogo.goleiroTime2 = this.Current.goleiroTime2;
            this.proximos = this.proximos.concat(this.Current.time1);
            if (this.Current.goleiroTime1)
                this.proximos.push(this.Current.goleiroTime1);
            novoJogo.timeVantagem = 1;
        }
        if (this.Current.time2Goals() == this.Current.time1Goals()) {
            if (this.proximos.length > 10) {
                if (this.Current.timeVantagem == 1) {
                    this.proximos = this.proximos.concat(this.Current.time1);
                    this.proximos = this.proximos.concat(this.Current.time2);
                }
                if (this.Current.timeVantagem == 2) {
                    this.proximos = this.proximos.concat(this.Current.time2);
                    this.proximos = this.proximos.concat(this.Current.time1);
                }
            }
        }
        this.Current = novoJogo;
        this.Current.numDeJog = this.confNumberPlayers;
        this.Current.time1 = [];
        this.Current.time2 = [];
        this.preencherTimesComProximos();
    }

    voltarJogo() {
        if (this.jogosFinalizados.length > 0) {
            this.Current = this.jogosFinalizados[this.jogosFinalizados.length - 1];
            this.proximos = this.Current.proximas;
            this.Current.proximas = new Array<Jogador>();
            this.jogosFinalizados.pop();
        }
    }

    pegarProximoJogador(remove) {
        for (let plr in this.proximos) {
            if (!this.proximos[plr].goleiro) {
                if (remove) {
                    var jogador = this.proximos.splice(+plr, 1)[0];
                    jogador = this.renew(jogador);
                    return jogador;
                }
                else {
                    return this.proximos[plr];
                }
            }
        }
        return null;
    }

    pegarProximoGoleiro(remove) {
        for (let plr in this.proximos) {
            if (this.proximos[plr].goleiro) {
                if (remove)
                    return this.proximos.splice(+plr, 1)[0];
                else
                    return this.proximos[plr];
            }
        }
        return null;
    }

    preencherTimesComProximos() {
        if (this.Current.goleiroTime1 && this.pegarProximoGoleiro(false)) {
            this.Current.goleiroTime1 == this.pegarProximoGoleiro(true);
        }
        if (this.Current.goleiroTime2 && this.pegarProximoGoleiro(false)) {
            this.Current.goleiroTime2 == this.pegarProximoGoleiro(true);
        }
        while (this.Current.time1.length < this.Current.numDeJog && this.pegarProximoJogador(false)) {
            this.Current.time1.push(this.pegarProximoJogador(true));
        }
        while (this.Current.time2.length < this.Current.numDeJog && this.pegarProximoJogador(false)) {
            this.Current.time2.push(this.pegarProximoJogador(true));
        }
    }

    addPlayerToOrder() {
        if (this.newPlayer && this.newPlayer != '') {
            var newId = Math.floor(Math.random() * 100000000) + 1;
            this.ordemDeChegada.push({ id: newId, name: this.newPlayer, goleiro: this.isGoalkeeper });
            this.addPlayerToGame(newId, this.newPlayer, this.isGoalkeeper);
            this.newPlayer = '';
            this.isGoalkeeper = false;
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


    addPlayerToGame(id, name, isGoalkeeper) {
        if (!isGoalkeeper) {
            if (this.Current.time1.length < this.Current.numDeJog || this.Current.time2.length < this.Current.numDeJog) {
                if (this.Current.time1.length == this.Current.time2.length) {
                    this.Current.time1.push({ id: id, name: name, gols: 0, assistencias: 0, golsContra: 0, goleiro: false });
                }
                else {
                    this.Current.time2.push({ id: id, name: name, gols: 0, assistencias: 0, golsContra: 0, goleiro: false });
                }
            }
            else {
                this.proximos.push({ id: id, name: name, gols: 0, assistencias: 0, golsContra: 0, goleiro: false });
            }
        }
        else {
            if (this.jogosFinalizados.length == 0) {
                if (!this.Current.goleiroTime1)
                    this.Current.goleiroTime1 = { id: id, name: name, gols: 0, assistencias: 0, golsContra: 0, goleiro: true }
                else if (!this.Current.goleiroTime2)
                    this.Current.goleiroTime2 = { id: id, name: name, gols: 0, assistencias: 0, golsContra: 0, goleiro: true }
                else
                    this.proximos.push({ id: id, name: name, gols: 0, assistencias: 0, golsContra: 0, goleiro: true });
            }
        }
    }
    


    marcarGol(aa) {
        var found = false;
        if (this.Current.goleiroTime1 && this.Current.goleiroTime1.id == aa) {
            this.Current.goleiroTime1.gols = this.Current.goleiroTime1.gols + 1;
            found = true;
        }
        if (this.Current.goleiroTime2 && this.Current.goleiroTime2.id == aa) {
            this.Current.goleiroTime2.gols = this.Current.goleiroTime2.gols + 1;
            found = true;
        }
        if (!found) {
            for (var i in this.Current.time1) {
                if (this.Current.time1[i].id == aa) {
                    this.Current.time1[i].gols = this.Current.time1[i].gols + 1;
                    found = true;
                    break; //Stop this loop, we found it!
                }
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
        if (this.Current.goleiroTime1 && this.Current.goleiroTime1.id == aa) {
            this.Current.goleiroTime1.gols = this.Current.goleiroTime1.gols - 1;
            found = true;
        }
        if (this.Current.goleiroTime2 && this.Current.goleiroTime2.id == aa) {
            this.Current.goleiroTime2.gols = this.Current.goleiroTime2.gols - 1;
            found = true;
        }
        if (!found) {
            for (var i in this.Current.time1) {
                if (this.Current.time1[i].id == aa) {
                    this.Current.time1[i].gols = this.Current.time1[i].gols - 1;
                    found = true;
                    break; //Stop this loop, we found it!
                }
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
        if (this.Current.goleiroTime1 && this.Current.goleiroTime1.id == aa) {
            this.Current.goleiroTime1.golsContra = this.Current.goleiroTime1.golsContra + 1;
            found = true;
        }
        if (this.Current.goleiroTime2 && this.Current.goleiroTime2.id == aa) {
            this.Current.goleiroTime2.golsContra = this.Current.goleiroTime2.golsContra + 1;
            found = true;
        }
        if (!found) {
            for (var i in this.Current.time1) {
                if (this.Current.time1[i].id == aa) {
                    this.Current.time1[i].golsContra = this.Current.time1[i].golsContra + 1;
                    found = true;
                    break; //Stop this loop, we found it!
                }
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
        if (this.Current.goleiroTime1 && this.Current.goleiroTime1.id == aa) {
            this.Current.goleiroTime1.assistencias = this.Current.goleiroTime1.assistencias + 1;
            found = true;
        }
        if (this.Current.goleiroTime2 && this.Current.goleiroTime2.id == aa) {
            this.Current.goleiroTime2.assistencias = this.Current.goleiroTime2.assistencias + 1;
            found = true;
        }
        if (!found) {
            for (var i in this.Current.time1) {
                if (this.Current.time1[i].id == aa) {
                    this.Current.time1[i].assistencias = this.Current.time1[i].assistencias + 1;
                    found = true;
                    break; //Stop this loop, we found it!
                }
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
        if (this.Current.goleiroTime1 && this.Current.goleiroTime1.id == aa) {
            this.Current.goleiroTime1.golsContra = this.Current.goleiroTime1.golsContra - 1;
            found = true;
        }
        if (this.Current.goleiroTime2 && this.Current.goleiroTime2.id == aa) {
            this.Current.goleiroTime2.golsContra = this.Current.goleiroTime2.golsContra - 1;
            found = true;
        }
        if (!found) {
            for (var i in this.Current.time1) {
                if (this.Current.time1[i].id == aa) {
                    this.Current.time1[i].golsContra = this.Current.time1[i].golsContra - 1;
                    found = true;
                    break; //Stop this loop, we found it!
                }
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
        if (this.Current.goleiroTime1 && this.Current.goleiroTime1.id == aa) {
            this.Current.goleiroTime1.assistencias = this.Current.goleiroTime1.assistencias - 1;
            found = true;
        }
        if (this.Current.goleiroTime2 && this.Current.goleiroTime2.id == aa) {
            this.Current.goleiroTime2.assistencias = this.Current.goleiroTime2.assistencias - 1;
            found = true;
        }
        if (!found) {
            for (var i in this.Current.time1) {
                if (this.Current.time1[i].id == aa) {
                    this.Current.time1[i].assistencias = this.Current.time1[i].assistencias - 1;
                    found = true;
                    break; //Stop this loop, we found it!
                }
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
