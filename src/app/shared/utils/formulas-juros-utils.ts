export class formulasJurosUtils{
    public static jurosCompostos(valor: number, juros: number, tempo: number) : number {
        return valor * Math.pow(1+this.convertToPercentage(juros) , tempo);
    }

    public static calcularJurosCompostosAporteMensal(capitalInicial: number, 
        aporteMensal: number, 
        taxaJurosMensal: number, 
        meses: number
    ) : number {
        return (
            capitalInicial * Math.pow(1 + this.convertToPercentage(taxaJurosMensal), meses/12) +
            (aporteMensal * (Math.pow(1 + this.convertToPercentage(taxaJurosMensal), meses/12) - 1)) / this.convertToPercentage(taxaJurosMensal)
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

        return this.calcularJurosCompostosAporteMensal(capitalInicial, aporteMensal, taxaDI*this.convertToPercentage(taxaCDB), meses) * (1 - this.convertToPercentage(taxaIR))
    }

    public static calcularLCA_LCI(capitalInicial: number, 
        aporteMensal: number, 
        taxaDI: number,
        taxaLC : number, 
        meses: number
    ) : number {

        return this.calcularJurosCompostosAporteMensal(capitalInicial, aporteMensal, taxaDI*this.convertToPercentage(taxaLC), meses)
    }


    // Auxiliares
    public static convertToPercentage(value:number) : number{
        return value/100.00;
    }
}