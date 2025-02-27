import { Component, Input } from '@angular/core';
import { PrimengModule } from '../../modules/primeng.module';
@Component({
  selector: 'app-simulacao-grafico',
  imports: [PrimengModule],
  templateUrl: './simulacao-grafico.component.html',
  styleUrl: './simulacao-grafico.component.scss'
})
export class SimulacaoGraficoComponent {
  @Input() chartData: any;
  @Input() chartOptions: any;
}
