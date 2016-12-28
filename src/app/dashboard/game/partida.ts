export class Partida {
    public time1: Array<Jogador>;
    public time2: Array<Jogador>;
    public numDeJog: number;
    public emAndamento: boolean;

    constructor() {
        this.numDeJog = 6;
    }

    time1Goals() {
        var total = 0;
        for (var i in this.time1) {
            total = this.time1[i].gols;
        }
        for (var i in this.time2) {
            total = this.time2[i].golsContra;
        }
        return total;
    }

    time2Goals() {
        var total = 0;
        for (var i in this.time2) {
            total = this.time2[i].gols;
        }
        for (var i in this.time1) {
            total = this.time1[i].golsContra;
        }
        return total;
    }
}

export class Jogador {
    public id: number;
    public name: string;
    public gols: number;
    public golsContra: number;
    public assistencias: number;
}