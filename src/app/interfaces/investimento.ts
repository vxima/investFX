import { FormGroup } from "@angular/forms";

export interface Investimento {

    form: FormGroup;
    
    titulo: string;
    montante: number;
    valorTotalInvestido: number;
    rendimentoBruto: number;
    rendimentoLiquido: number;
    valorTotalLiquido: number;
    porcentagem: number;
    taxaImpostoRenda?: number;
    valorImpostoRenda?: number;
  }