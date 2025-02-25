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

    public static calcularCDB(capitalInicial: number, 
        aporteMensal: number, 
        taxaJurosMensal: number, 
        meses: number) : number{
        var taxaIR : number
        if (meses < 6){
            taxaIR = 22.5
        }
        else if (meses >= 6 && meses <12){
            taxaIR = 20.0
        }
        else if (meses >= 12 && meses <24){
            taxaIR = 17.5
        }
        else {
            taxaIR = 15.0
        }

        return this.calcularJurosCompostosAporteMensal(capitalInicial, aporteMensal, taxaJurosMensal, meses) * (1 - taxaIR/100)
    }

    public static calcularLCA_LCI(capitalInicial: number, 
        aporteMensal: number, 
        taxaJurosMensal: number, 
        meses: number
    ) : number {
        return this.calcularJurosCompostosAporteMensal(capitalInicial, aporteMensal, taxaJurosMensal, meses)
    }
}