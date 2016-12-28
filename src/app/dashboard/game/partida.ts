export class Partida {
    public time1: Array<Jogador>;
    public time2: Array<Jogador>;
    public numDeJog: number;
    public emAndamento: boolean;
    public goleiroTime1: Jogador;
    public goleiroTime2: Jogador;
    public proximas: Array<Jogador>;
    public timeVantagem: number;

    constructor() {
        this.numDeJog = 6;
        this.timeVantagem = 1;
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
}

export class Jogador {
    public id: number;
    public name: string;
    public gols: number;
    public golsContra: number;
    public assistencias: number;
    public goleiro: boolean;

    constructor() {
        
    }

}