import { FormGroup } from "@angular/forms";
import { Investimento } from "../interfaces/investimento";
import { formulasJurosUtils} from "../shared/utils/formulas-juros-utils"

export class LcaLci implements Investimento{
    titulo = 'LCA / LCI';
  
    constructor(public form: FormGroup) {}
  
    get montante(): number {
        const { valorInicial, aporteMensal, taxaDI, taxaLC , tempo, fixadoLC} = this.form.value;
      return formulasJurosUtils.calcularLCA_LCI(valorInicial, aporteMensal, taxaDI, taxaLC , tempo, fixadoLC)
    }
    get valorTotalInvestido() : number {
        const {valorInicial, aporteMensal, tempo} = this.form.value;
        return valorInicial + aporteMensal * tempo;
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