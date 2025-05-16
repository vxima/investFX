import { Component, DEFAULT_CURRENCY_CODE, Input, LOCALE_ID } from '@angular/core';
import { PrimengModule } from '../../modules/primeng.module';
import { DecimalPipe } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData , CurrencyPipe} from '@angular/common';

registerLocaleData(localePt , 'pt-BR');

@Component({
  selector: 'app-simulacao-panel',
  imports: [PrimengModule, DecimalPipe],
  standalone: true,
  templateUrl: './simulacao-panel.component.html',
  styleUrl: './simulacao-panel.component.scss',
  providers: [DecimalPipe, CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },]
})
export class SimulacaoPanelComponent {
  @Input() titulo: string = '';
  @Input() percentual: number = 0;
  @Input() valorInvestido: number = 0;
  @Input() rendimentoBruto: number = 0;
  @Input() rendimentoLiquido: number = 0;
  @Input() valorLiquido: number = 0;
  @Input() valorImpostoRenda: number = 0;
  @Input() taxaImpostoRenda: number = 0;

  constructor(private decimalPipe: DecimalPipe, private readonly currencyPipe: CurrencyPipe) {}

  formatar(valor: number): string {
    return this.currencyPipe.transform(valor, 'BRL') || '';
  }
  ngOnChanges() {
    this.printar();
  }

  printar(){
    console.log(typeof this.percentual , this.percentual);
  }


}
