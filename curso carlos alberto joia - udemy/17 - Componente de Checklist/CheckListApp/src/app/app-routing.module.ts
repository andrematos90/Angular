import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CategoryComponent } from './components/category/category.component';
import { ChecklistComponent } from './components/checklist/checklist.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'categoria', component: CategoryComponent},
  {path: 'checklist', component: ChecklistComponent},
  {path:'**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
