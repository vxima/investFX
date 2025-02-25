import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { formulasJurosUtils } from '../shared/utils/formulas-juros-utils';
import { MaterialModule } from '../shared/material.module';
import { PrimengModule } from '../shared/primeng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simulacao',
  imports: [CommonModule,
            ReactiveFormsModule, 
            MaterialModule,
            PrimengModule
  ],
  templateUrl: './simulacao.component.html',
  styleUrl: './simulacao.component.scss',
  standalone: true
})
export class SimulacaoComponent {
  simulacaoForm: FormGroup;
  resultado: number = 0;
  periodoOptions = [
    { label: 'Meses', value: 'mes' },
    { label: 'Anos', value: 'ano' }
  ];

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.simulacaoForm = this.fb.group({
      valorInicial: [0.0 , [Validators.required]],
      aporteMensal: [0.0], //opcional
      taxaJuros: [0.0, [Validators.required]],
      tempo: [0, [Validators.required]],
      periodo: ['mes', [Validators.required]],

    });

  }

  calcularMontante(){
    const formValues = this.simulacaoForm.value; 
    this.resultado = formulasJurosUtils.calcularJurosCompostosAporteMensal(formValues.valorInicial, formValues.aporteMensal, formValues.taxaJuros, formValues.tempo)
  }

  limpar(){
    console.log(this.simulacaoForm.value)
    this.simulacaoForm.reset({
      valorInicial: 0.0,
      aporteMensal: 0.0,
      taxaJuros: 0.0,
      tempo: 0,
      periodo: 'mes'
    });
  }
}
