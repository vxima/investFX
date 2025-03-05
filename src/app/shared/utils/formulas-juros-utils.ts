export class formulasJurosUtils{
    public static jurosCompostos(valor: number, juros: number, tempo: number) : number {
        return valor * Math.pow(1+this.convertToPercentage(juros) , tempo);
    }

    public static calcularJurosCompostosAporteMensal(capitalInicial: number, 
        aporteMensal: number, 
        taxaJurosAnual: number, 
        meses: number
    ) : number {
        const taxaJurosMensal = this.convertJuroAnualToMensal(taxaJurosAnual);

        return (
            capitalInicial * Math.pow(1 + taxaJurosMensal, meses) +
            (aporteMensal * (Math.pow(1 + taxaJurosMensal, meses) - 1)) / taxaJurosMensal
        );
    }

    public static calcularPoupanca(capitalInicial: number, 
        aporteMensal: number, 
        taxaSelic: number,
        meses: number) : number{
            var taxaPoupança
            if(taxaSelic >=8.5){
                taxaPoupança = 6.17;
            }
            else{
                taxaPoupança = 0.7 * taxaSelic  
            }

            return this.calcularJurosCompostosAporteMensal(capitalInicial, aporteMensal, taxaPoupança, meses)
        }
    public static calcularCDB(capitalInicial: number, 
        aporteMensal: number, 
        taxaDI: number, 
        taxaCDB : number,
        meses: number,
        fixadoCDB: string) : number {
        var taxa : number = 0;
        if (fixadoCDB == 'pos'){
            taxa = taxaCDB*taxaDI/100
        }
        else{
            taxa = taxaCDB
        }

        return this.calcularJurosCompostosAporteMensal(capitalInicial, aporteMensal, taxa, meses)
    }

    public static calcularLCA_LCI(capitalInicial: number, 
        aporteMensal: number, 
        taxaDI: number,
        taxaLC : number, 
        meses: number,
        fixadoLC : string
    ) : number {

        var taxa : number = 0;
        if (fixadoLC == 'pos'){
            taxa = taxaLC*taxaDI/100
        }
        else{
            taxa = taxaLC
        }
        return this.calcularJurosCompostosAporteMensal(capitalInicial, aporteMensal, taxa, meses)
    }


    // Auxiliares
    public static convertToPercentage(value:number) : number{
        return value/100.00;
    }

    public static convertJuroAnualToMensal(taxaAnual: number) : number {
        return Math.pow(1+ this.convertToPercentage(taxaAnual) , (1/12)) - 1;
    }
}