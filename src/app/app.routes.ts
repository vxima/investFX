import { RouterModule, Routes } from '@angular/router';
import { SimulacaoComponent } from './simulacao/simulacao.component';
import { NgModule } from '@angular/core';
import {SobreComponent} from './pages/sobre/sobre.component';
import {ContatoComponent} from './pages/contato/contato.component';

export const routes: Routes = [
    { path: 'simulacao' , component: SimulacaoComponent},
    { path: 'sobre' , component: SobreComponent},
    { path: 'contato' , component: ContatoComponent},
    { path: '' , redirectTo: 'simulacao', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
