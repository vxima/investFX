import { FormGroup } from "@angular/forms";
import { Investimento } from "../interfaces/investimento";
import { formulasJurosUtils} from "../shared/utils/formulas-juros-utils"

export class CDB implements Investimento{
    titulo : string = 'CDB';
    tempo : number = 0;
    constructor(public form: FormGroup) {
      if(this.form.value.periodo == 'ano'){
        this.tempo = 12*this.form.value.tempo
      } else{
        this.tempo = this.form.value.tempo
      }
    }

    get montante(): number {
        const { valorInicial, aporteMensal, taxaDI, taxaCDB, fixadoCDB} = this.form.value;
      return formulasJurosUtils.calcularCDB(valorInicial, aporteMensal, taxaDI, taxaCDB , this.tempo, fixadoCDB)
    }
    get valorTotalInvestido() : number {
        const {valorInicial, aporteMensal} = this.form.value;
        return valorInicial + aporteMensal * this.tempo;
    }

    get rendimentoBruto() : number {
        return this.montante - this.valorTotalInvestido;
    }

    get taxaImpostoRenda()  :number {
        var taxaIR;
        if (this.tempo < 6){
            taxaIR = 22.5
        }
        else if (this.tempo >= 6 && this.tempo <12){
            taxaIR = 20.0
        }
        else if (this.tempo >= 12 && this.tempo <24){
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
