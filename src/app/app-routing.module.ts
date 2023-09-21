import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { GaleriaComponent } from './components/pages/galeria/galeria.component';
import { FaleConoscoComponent } from './components/pages/fale-conosco/fale-conosco.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'fale-conosco', component: FaleConoscoComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
