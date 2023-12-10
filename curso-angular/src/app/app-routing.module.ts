import { EventEmitter, NgModule, Pipe } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from './componentes/data-form/data-form.component';
import { DetalhesItemComponent } from './componentes/detalhes-item/detalhes-item.component';
import { DiretivasComponent } from './componentes/diretivas/diretivas.component';
import { EmitterComponent } from './componentes/emitter/emitter.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { IfRenderComponent } from './componentes/if-render/if-render.component';
import { ListRenderComponent } from './componentes/list-render/list-render.component';
import { PipesComponent } from './componentes/pipes/pipes.component';
import { PrimeiroComponenteComponent } from './componentes/primeiro-componente/primeiro-componente.component';
import { TwoWayBidingComponent } from './componentes/two-way-biding/two-way-biding.component';

const routes: Routes = [
  {path: '', component: PrimeiroComponenteComponent},
  {path: 'diretivas', component: DiretivasComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: DetalhesItemComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'two-way-biding', component: TwoWayBidingComponent},
  {path: 'form', component: DataFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
