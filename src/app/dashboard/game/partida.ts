export class JogoFinalizadoToSave {
    public jogosFinalizados: Array<Partida>;
    public gameDate: string;
    public id: number;
}


export class Partida {
    public time1: Array<Jogador>;
    public time2: Array<Jogador>;
    public numDeJog: number;
    public emAndamento: boolean;
    public goleiroTime1: Jogador;
    public goleiroTime2: Jogador;
    public proximas: Array<Jogador>;
    public timeVantagem: string;

    constructor() {
        this.numDeJog = 6;
        this.timeVantagem = '1';
    }

    pegaLinhas() {
        if (this.time1.length > this.time2.length) {
            return this.time1.length;
        }
        if (this.time2.length > this.time1.length) {
            return this.time2.length;
        }
        return this.time1.length;
    }

    time1Goals() {
        var total = 0;
        for (var i in this.time1) {
            total = total + this.time1[i].gols;
        }
        for (var i in this.time2) {
            total = total + this.time2[i].golsContra;
        }
        if (this.goleiroTime1) {
            total = total + this.goleiroTime1.gols;
        }
        if (this.goleiroTime2) {
            total = total + this.goleiroTime2.golsContra;
        }
        return total;
    }

    time2Goals() {
        var total = 0;
        for (var i in this.time2) {
            total = total + this.time2[i].gols;
        }
        for (var i in this.time1) {
            total = total + this.time1[i].golsContra;
        }
        if (this.goleiroTime1) {
            total = total + this.goleiroTime1.golsContra;
        }
        if (this.goleiroTime2) {
            total = total + this.goleiroTime2.gols;
        }
        return total;
    }

    clone() {
        var newPartida = new Partida();
        newPartida.numDeJog = this.numDeJog;
        newPartida.emAndamento = this.emAndamento;
        newPartida.timeVantagem = this.timeVantagem;
        if (this.goleiroTime1) {
            newPartida.goleiroTime1 = this.goleiroTime1.clone();
        }
        if (this.goleiroTime2) {
            newPartida.goleiroTime2 = this.goleiroTime2.clone();
        }
        newPartida.time1 = this.cloneList(this.time1);
        newPartida.time2 = this.cloneList(this.time2);
        newPartida.proximas = this.cloneList(this.proximas);
        return newPartida;
    }

    cloneList(lstToClone) {
        var retList = new Array<Jogador>();
        for (var i in lstToClone) {
            retList.push(lstToClone[i].clone());
        }
        return retList;
    }
}

export class Jogador {
    public id: number;
    public name: string;
    public gols: number;
    public golsContra: number;
    public assistencias: number;
    public goleiro: boolean;

    constructor(id?: number, name?: string, goleiro?: boolean) {
        this.id = id;
        this.name = name;
        this.goleiro = goleiro;
        this.gols = 0;
        this.golsContra = 0;
        this.assistencias = 0;
    }

    clone() {
        var newJogador = new Jogador();
        newJogador.id = this.id;
        newJogador.name = this.name;
        newJogador.gols = this.gols;
        newJogador.golsContra = this.golsContra;
        newJogador.assistencias = this.assistencias;
        newJogador.goleiro = this.goleiro;
        return newJogador;
    }
}