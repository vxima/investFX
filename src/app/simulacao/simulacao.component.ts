import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../shared/modules/material.module';
import { PrimengModule } from '../shared/modules/primeng.module';
import { CommonModule } from '@angular/common';
import { Poupanca } from '../models/poupanca.model';
import { Investimento } from '../interfaces/investimento';
import { LcaLci } from '../models/lcaLci.model';
import { CDB } from '../models/cdb.model';
import { SimulacaoDadosComponent } from '../shared/panels/simulacao-dados/simulacao-dados.component';
import { SimulacaoGraficoComponent } from '../shared/panels/simulacao-grafico/simulacao-grafico.component';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-simulacao',
  imports: [CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimengModule,
    SimulacaoDadosComponent,
    SimulacaoGraficoComponent],
  templateUrl: './simulacao.component.html',
  styleUrl: './simulacao.component.scss',
  standalone: true
})
export class SimulacaoComponent implements OnInit {
  simulacaoForm!: FormGroup;
  chartData: any;
  chartOptions: any;
  activePanels : number[]= [0,1,2]

  poupanca?: Investimento;
  lca_lci?: Investimento;
  cdb?: Investimento;

  periodoOptions = [
    { label: 'Meses', value: 'mes' },
    { label: 'Anos', value: 'ano' }
  ];
  fixadoOptions = [
    {label: "Pré-fixado", value:'pre'},
    {label: "Pós-fixado", value:'pos'},
  ]

  activeTab: string = 'dados';

  tabs = [
    { label: 'Dados', icon: 'pi pi-table', command: () => this.activeTab = 'dados' },
    { label: 'Gráfico', icon: 'pi pi-chart-bar', command: () => this.activeTab = 'grafico' }
  ];
  labels: string[] = ["1" , "2" , "3"];
  itemsHeader: MenuItem[] | undefined;

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
      fixadoCDB: ['pre'],
      fixadoLC: ['pre']

    });

    this.aplicarReverseTyping(['valorInicial','aporteMensal','taxaDI', 'taxaLC', 'taxaCDB']);
    this.simulacaoForm.valueChanges.subscribe(() => {
      this.poupanca = new Poupanca(this.simulacaoForm);
      this.lca_lci = new LcaLci(this.simulacaoForm);
      this.cdb = new CDB(this.simulacaoForm);
    });

  }

  private aplicarReverseTyping(campos: string[]) {
    campos.forEach(campo => {
      this.simulacaoForm.get(campo)?.valueChanges.subscribe(value => {
        if (value !== null && value !== undefined) {
          let numericValue = Number(value.toString().replace(/\D/g, '')); // Remove não números
          this.simulacaoForm.get(campo)?.setValue(numericValue / 100, { emitEvent: false }); // Divide por 100
        }
      });
    });
  }


  // Botoes

  resetarTaxa(campo: string): void {
    this.simulacaoForm.get(campo)?.setValue(0.0);
  }

  limpar(){
    console.log(this.simulacaoForm.value)
    this.simulacaoForm.reset();
    this.chartData = null;
  }



}
