import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { formulasJurosUtils } from '../shared/utils/formulas-juros-utils';
import { MaterialModule } from '../shared/material.module';

@Component({
  selector: 'app-simulacao',
  imports: [ ReactiveFormsModule, 
    MaterialModule
  ],
  templateUrl: './simulacao.component.html',
  styleUrl: './simulacao.component.scss',
  standalone: true
})
export class SimulacaoComponent {
  simulacaoForm: FormGroup;
  resultado: number = 0;

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.simulacaoForm = this.fb.group({
      valor: [0.0 , [Validators.required]],
      taxaJuros: [0.0, [Validators.required]],
      tempo: [0, [Validators.required]],
      periodo: ['mes', [Validators.required]],

    });

    this.simulacaoForm.valueChanges.subscribe(values => {
      this.resultado = formulasJurosUtils.jurosCompostos(values.valor , values.taxaJuros, values.tempo)
    });
  }
}
