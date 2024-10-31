import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { RenderizacaoCondicionalComponent } from './components/renderizacao-condicional/renderizacao-condicional.component'
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';

const routes: Routes = [
  { path: '', component: ListRenderComponent },
  { path: 'render', component: RenderizacaoCondicionalComponent },
  {path: 'list/:id', component: AnimalDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
