import { FormGroup } from "@angular/forms";

export interface Investimento {

    form: FormGroup;
    
    nome: string;
    montante: number;
    valorTotalInvestido: number;
    rendimentoBruto: number;
    rendimentoLiquido: number;
    valorTotalLiquido: number;
    porcentagem: number;
  }