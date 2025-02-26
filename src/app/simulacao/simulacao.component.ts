import { Component, OnInit } from '@angular/core';
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
export class SimulacaoComponent implements OnInit {
  simulacaoForm!: FormGroup;
  resultado: number = 0;
  chartData: any;
  chartOptions: any;
  periodoOptions = [
    { label: 'Meses', value: 'mes' },
    { label: 'Anos', value: 'ano' }
  ];
  fixadoOptions = [
    {label: "Pré-fixado", value:'pre'},
    {label: "Pós-fixado", value:'pos'},
  ]

  activeTab: string = 'grafico';
  montante: number = 10000; // Exemplo de valor

  tabs = [
    { label: 'Gráfico', icon: 'pi pi-chart-bar', command: () => this.activeTab = 'grafico' },
    { label: 'Dados', icon: 'pi pi-table', command: () => this.activeTab = 'dados' }
  ];

  onTabChange(event: any) {
    this.activeTab = event.item.label.toLowerCase();
  }

  constructor(
    private readonly fb: FormBuilder
  ) {

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        }
      }
    };

  }

  ngOnInit() {
    // Inicializa o formulário
    this.simulacaoForm = this.fb.group({
      valorInicial: [0.0 , [Validators.required]],
      aporteMensal: [0.0], 
      taxaDI: [0.0, [Validators.required]],
      taxaLC: [0.0, ],
      taxaCDB: [0.0,],
      tempo: [0, [Validators.required]],
      periodo: ['mes', [Validators.required]],
      fixadoCDB: ['pos'] ,
      fixadoLC: ['pos'] 

    });

    this.aplicarTransformacaoNasTaxas(['taxaDI', 'taxaLC', 'taxaCDB']);
  }

  private aplicarTransformacaoNasTaxas(campos: string[]) {
    campos.forEach(campo => {
      this.simulacaoForm.get(campo)?.valueChanges.subscribe(value => {
        if (value !== null && value !== undefined) {
          let numericValue = Number(value.toString().replace(/\D/g, '')); // Remove não números
          this.simulacaoForm.get(campo)?.setValue(numericValue / 100, { emitEvent: false }); // Divide por 100
        }
      });
    });
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
