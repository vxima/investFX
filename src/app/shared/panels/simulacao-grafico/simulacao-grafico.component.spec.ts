import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoGraficoComponent } from './simulacao-grafico.component';

describe('SimulacaoGraficoComponent', () => {
  let component: SimulacaoGraficoComponent;
  let fixture: ComponentFixture<SimulacaoGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulacaoGraficoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulacaoGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
