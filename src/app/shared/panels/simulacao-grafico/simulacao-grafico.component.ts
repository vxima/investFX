import { Component, Input } from '@angular/core';
import { PrimengModule } from '../../modules/primeng.module';
import { Investimento } from '../../../interfaces/investimento';
@Component({
  selector: 'app-simulacao-grafico',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './simulacao-grafico.component.html',
  styleUrl: './simulacao-grafico.component.scss'
})
export class SimulacaoGraficoComponent {
  private _poupanca?: Investimento
  private _cdb?: Investimento
  private _lca_lci?: Investimento
  private _labels?: string[]

  @Input() set labels(value: string[]) {
    this._labels = value;
    this.updateChart();
  }

  @Input() set poupanca(value: Investimento | undefined) {
    this._poupanca = value;
    this.updateChart();
  }

  @Input() set cdb(value: Investimento | undefined) {
    this._cdb = value;
    this.updateChart();
  }

  @Input() set lca_lci(value: Investimento | undefined) {
    this._lca_lci = value;
    this.updateChart();
  }

  data: any;
  options: any;

  updateChart() {
    this.data = {
      labels: this._labels,
      datasets: [
        {
          label: '',
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          borderColor: ['#1E88E5', '#388E3C', '#F57C00'],
          borderWidth: 1,
          data: [this._poupanca?.montante || 0 , this._cdb?.montante || 0, this._lca_lci?.montante || 0]
        }]
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: true } },
      plugins: {
        legend: {
          display: false
        }
      }

    };
  }
}
