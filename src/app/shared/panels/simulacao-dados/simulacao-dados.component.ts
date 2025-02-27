import { Component, Input } from '@angular/core';
import { Investimento } from '../../../interfaces/investimento';
import { SimulacaoPanelComponent } from "../simulacao-panel/simulacao-panel.component";
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simulacao-dados',
  imports: [SimulacaoPanelComponent],
  templateUrl: './simulacao-dados.component.html',
  styleUrl: './simulacao-dados.component.scss'
})
export class SimulacaoDadosComponent {
  @Input() poupanca?: Investimento;
  @Input() cdb?: Investimento;
  @Input() lca_lci?: Investimento;
  @Input() simulacaoForm?: FormGroup;
}
