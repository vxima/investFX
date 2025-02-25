export class formulasJurosUtils{
    public static jurosCompostos(valor: number, juros: number, tempo: number) : number {
        return valor * Math.pow(1+(juros/100) , tempo);
    }

    public static calcularJurosCompostosAporteMensal(capitalInicial: number, 
        aporteMensal: number, 
        taxaJurosMensal: number, 
        meses: number
    ) : number {
        return (
            capitalInicial * Math.pow(1 + (taxaJurosMensal/100), meses) +
            (aporteMensal * (Math.pow(1 + (taxaJurosMensal/100), meses) - 1)) / (taxaJurosMensal/100)
        );
    }
}