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
  chartData: any;
  chartOptions: any;
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

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        }
      }
    };

  }

  calcularMontante(){
    const formValues = this.simulacaoForm.value; 
    this.resultado = formulasJurosUtils.calcularJurosCompostosAporteMensal(formValues.valorInicial, formValues.aporteMensal, formValues.taxaJuros, formValues.tempo)
  }

  calcularMontante2() {
    const valorInicial = this.simulacaoForm.value.valorInicial;
    const aporteMensal = this.simulacaoForm.value.aporteMensal;
    const taxaJuros = this.simulacaoForm.value.taxaJuros / 100;
    const tempo = this.simulacaoForm.value.tempo;
    if(this.simulacaoForm.value.periodo == 'ano'){
      const tempo = 12 * this.simulacaoForm.value.tempo;
    }
    
    let montante = valorInicial;
    const valores = [valorInicial];

    for (let i = 1; i <= tempo; i++) {
      montante = montante * (1 + taxaJuros) + aporteMensal;
      valores.push(montante);
    }

    this.chartData = {
      labels: Array.from({ length: tempo + 1 }, (_, i) => `Mês ${i}`),
      datasets: [
        {
          label: 'Montante Acumulado',
          data: valores,
          backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }
      ]
    };
  }

  limpar(){
    console.log(this.simulacaoForm.value)
    this.simulacaoForm.reset();
    this.chartData = null;
  }
}
