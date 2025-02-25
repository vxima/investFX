import { RouterModule, Routes } from '@angular/router';
import { SimulacaoComponent } from './simulacao/simulacao.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'simulacao' , component: SimulacaoComponent},
    { path: '' , redirectTo: 'simulacao', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
