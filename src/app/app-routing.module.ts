import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CaroselloCardComponent } from './components/carosello-card/carosello-card.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OfferteComponent } from './components/offerte/offerte.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { SingleFilmComponent } from './components/single-film/single-film.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'singlefilm/:idCliccato', component: SingleFilmComponent},
  { path: 'Film', component: CaroselloCardComponent },
  {    path: 'Offerte', component: OfferteComponent
  },
  { path: 'ChiSiamo', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
