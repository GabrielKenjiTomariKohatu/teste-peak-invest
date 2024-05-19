import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaEditComponent } from './components/tela-edit/tela-edit.component';
import { TelaListComponent } from './components/tela-list/tela-list.component';
import { TelaHomeComponent } from './components/tela-home/tela-home.component';

const routes: Routes = [
  {
    path: '',
    component: TelaHomeComponent,
  },
  {
    path: 'edit',
    component: TelaEditComponent,
  },
  {
    path: 'list',
    component: TelaListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
