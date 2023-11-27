import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponenteComponent } from './components/first-componente/first-componente.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponenteComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
