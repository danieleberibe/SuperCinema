import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { CaroselloComponent } from './components/carosello/carosello.component';
import { CaroselloCardComponent } from './components/carosello-card/carosello-card.component';
import { OfferteComponent } from './components/offerte/offerte.component';
import { SingleFilmComponent } from './components/single-film/single-film.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { InterfacciaUtenteComponent } from './components/interfaccia-utente/interfaccia-utente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegistrazioneComponent,
    CaroselloComponent,
    CaroselloCardComponent,
    OfferteComponent,
    SingleFilmComponent,
    AboutComponent,
    InterfacciaUtenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
