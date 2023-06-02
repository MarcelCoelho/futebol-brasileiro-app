import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaComponent } from '../tabela/pages/tabela/tabela.component';
import { SimuladorComponent } from '../simulador/pages/simulador/simulador.component';
import { PartidasComponent } from '../jogos/pages/partidas/partidas.component';
import { CadastrosComponent } from '../rodadas/pages/cadastros/cadastro.component';

const routes: Routes = [
  {
    path: 'brasileirao/tabela',
    component: TabelaComponent,
    pathMatch: 'full'
  },
  {
    path: 'brasileirao/times',
    component: PartidasComponent
  },
  {
    path: 'brasileirao/simulador',
    component: SimuladorComponent
  },
  {
    path: 'brasileirao/rodadas',
    component: CadastrosComponent
  },
  {
    path: '**',
    redirectTo: 'brasileirao/tabela'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
