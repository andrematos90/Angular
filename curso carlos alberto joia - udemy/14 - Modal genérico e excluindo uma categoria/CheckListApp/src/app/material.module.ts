import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule

  ],
  exports:[
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }
