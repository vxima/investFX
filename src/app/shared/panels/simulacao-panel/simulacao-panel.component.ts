import { Component, Input, LOCALE_ID } from '@angular/core';
import { PrimengModule } from '../../modules/primeng.module';
import { DecimalPipe } from '@angular/common';
import localePt from '@angular/common/locales/pt'; 
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@Component({
  selector: 'app-simulacao-panel',
  imports: [PrimengModule],
  standalone: true,
  templateUrl: './simulacao-panel.component.html',
  styleUrl: './simulacao-panel.component.scss',
  providers: [DecimalPipe, { provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class SimulacaoPanelComponent {
  @Input() titulo: string = '';  // Título do painel
  @Input() percentual: number = 0;  // Valor para a barra de progresso
  @Input() valorInvestido: number = 0;
  @Input() rendimentoBruto: number = 0;
  @Input() rendimentoLiquido: number = 0;
  @Input() valorLiquido: number = 0;
  @Input() valorImpostoRenda: number = 0;
  @Input() taxaImpostoRenda: number = 0;

  constructor(private decimalPipe: DecimalPipe) {}

  formatar(valor: number): string {
    return this.decimalPipe.transform(valor, '1.0-2', 'pt-BR') || '';
  }
}
