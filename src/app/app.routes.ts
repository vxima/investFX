import { Routes } from '@angular/router';
import { SimulacaoComponent } from './simulacao/simulacao.component';

export const routes: Routes = [
    { path: 'simulacao' , component: SimulacaoComponent},
    { path: '' , redirectTo: 'simulacao', pathMatch:'full'}
];
