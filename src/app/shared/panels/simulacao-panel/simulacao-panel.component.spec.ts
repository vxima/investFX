import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoPanelComponent } from './simulacao-panel.component';

describe('SimulacaoPanelComponent', () => {
  let component: SimulacaoPanelComponent;
  let fixture: ComponentFixture<SimulacaoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulacaoPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulacaoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
