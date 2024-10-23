import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { FilhoComponent } from './components/filho/filho.component';
import { PaiComponent } from './components/pai/pai.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { RenderizacaoCondicionalComponent } from './components/renderizacao-condicional/renderizacao-condicional.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmiteComponent } from './components/emite/emite.component';
import { ExecutaEventoComponent } from './components/executa-evento/executa-evento.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FilhoComponent,
    PaiComponent,
    DiretivasComponent,
    RenderizacaoCondicionalComponent,
    EventosComponent,
    EmiteComponent,
    ExecutaEventoComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
