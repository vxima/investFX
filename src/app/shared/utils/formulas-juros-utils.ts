export class formulasJurosUtils{
    public static jurosCompostos(valor: number, juros: number, tempo: number) : number {
        return valor * Math.pow(1+(juros/100) , tempo);
    }
}