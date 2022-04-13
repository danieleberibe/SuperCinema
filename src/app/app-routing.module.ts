import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaroselloCardComponent } from './components/carosello-card/carosello-card.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { SingleFilmComponent } from './components/single-film/single-film.component';

const routes: Routes = [
  {path: '',
   component: HomepageComponent
  }, 
  {path: 'registrazione',
  component: RegistrazioneComponent
  },
  {path: 'singlefilm', 
  component: SingleFilmComponent
  },
  {path: 'carosellcard', 
  component: CaroselloCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
