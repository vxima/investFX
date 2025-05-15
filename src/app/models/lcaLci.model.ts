import { FormGroup } from "@angular/forms";
import { Investimento } from "../interfaces/investimento";
import { formulasJurosUtils} from "../shared/utils/formulas-juros-utils"

export class LcaLci implements Investimento{
    titulo = 'LCA / LCI';
    tempo : number = 0;
    constructor(public form: FormGroup) {

      if(this.form.value.periodo == 'ano'){
        this.tempo = 12*this.form.value.tempo
      } else{
        this.tempo = this.form.value.tempo
      }
    }

    get montante(): number {
        const { valorInicial, aporteMensal, taxaDI, taxaLC , fixadoLC} = this.form.value;
      return formulasJurosUtils.calcularLCA_LCI(valorInicial, aporteMensal, taxaDI, taxaLC , this.tempo, fixadoLC)
    }
    get valorTotalInvestido() : number {
        const {valorInicial, aporteMensal} = this.form.value;
        return valorInicial + aporteMensal * this.tempo;
    }

    get rendimentoBruto() : number {
        return this.montante - this.valorTotalInvestido;
    }

    get rendimentoLiquido() : number {
        return this.rendimentoBruto;
    }

    get valorTotalLiquido() : number {
        return this.montante;
    }

    get porcentagem() : number {
        return this.valorTotalInvestido !== 0 ? (this.rendimentoLiquido / this.valorTotalInvestido) * 100 : 0;
    }
}
