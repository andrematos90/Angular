import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,

  ],
  exports:[
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }
