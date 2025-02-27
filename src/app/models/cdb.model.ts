import { FormGroup } from "@angular/forms";
import { Investimento } from "../interfaces/investimento";
import { formulasJurosUtils} from "../shared/utils/formulas-juros-utils"

export class CDB implements Investimento{
    titulo : string = 'CDB';
  
    constructor(public form: FormGroup) {}
  
    get montante(): number {
        const { valorInicial, aporteMensal, taxaDI, taxaCDB , tempo, fixadoCDB} = this.form.value;
      return formulasJurosUtils.calcularCDB(valorInicial, aporteMensal, taxaDI, taxaCDB , tempo, fixadoCDB)
    }
    get valorTotalInvestido() : number {
        const {valorInicial, aporteMensal, tempo} = this.form.value;
        return valorInicial + aporteMensal * tempo;
    }

    get rendimentoBruto() : number {
        return this.montante - this.valorTotalInvestido;
    }
    
    get taxaImpostoRenda()  :number {
        const {tempo} = this.form.value;
        var taxaIR;
        if (tempo < 6){
            taxaIR = 22.5
        }
        else if (tempo >= 6 && tempo <12){
            taxaIR = 20.0
        }
        else if (tempo >= 12 && tempo <24){
            taxaIR = 17.5
        }
        else {
            taxaIR = 15.0
        }
        return taxaIR;
    }

    get valorImpostoRenda(): number {
        return this.rendimentoBruto*this.taxaImpostoRenda/100;
    }

    get rendimentoLiquido() : number {
        return this.rendimentoBruto - this.valorImpostoRenda;
    }

    get valorTotalLiquido() : number {
        return this.montante - this.valorImpostoRenda;
    }
  
    get porcentagem() : number {
        return this.valorTotalInvestido !== 0 ? (this.rendimentoLiquido / this.valorTotalInvestido) * 100 : 0;
    }
}