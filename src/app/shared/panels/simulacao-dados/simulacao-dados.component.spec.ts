import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoDadosComponent } from './simulacao-dados.component';

describe('SimulacaoDadosComponent', () => {
  let component: SimulacaoDadosComponent;
  let fixture: ComponentFixture<SimulacaoDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulacaoDadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulacaoDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
