import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { FilhoComponent } from './components/filho/filho.component';
import { PaiComponent } from './components/pai/pai.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FilhoComponent,
    PaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
