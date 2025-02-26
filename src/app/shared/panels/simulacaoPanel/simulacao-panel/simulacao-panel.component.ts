import { Component, Input } from '@angular/core';
import { PrimengModule } from '../../../modules/primeng.module';

@Component({
  selector: 'app-simulacao-panel',
  imports: [PrimengModule],
  templateUrl: './simulacao-panel.component.html',
  styleUrl: './simulacao-panel.component.scss'
})
export class SimulacaoPanelComponent {
  @Input() titulo: string = '';  // Título do painel
  @Input() percentual: number = 0;  // Valor para a barra de progresso
  @Input() valorInvestido: number = 0;
  @Input() rendimentoBruto: number = 0;
  @Input() rendimentoLiquido: number = 0;
  @Input() valorLiquido: number = 0;

}
