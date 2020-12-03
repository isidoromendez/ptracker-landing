import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LaninComponent } from './components/pages/lanin/lanin.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lanin', component: LaninComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
