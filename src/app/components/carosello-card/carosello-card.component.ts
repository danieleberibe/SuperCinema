import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-carosello-card',
  templateUrl: './carosello-card.component.html',
  styleUrls: ['./carosello-card.component.css']
})
export class CaroselloCardComponent implements OnInit {

  public idCliccato: string;

  public isCollapsed = true;
  public isCollapsed2 = true;

  popularFilm: any = [];

  preurl = 'https://image.tmdb.org/t/p/original/'

  pippoCAZZO: FilmService;
  constructor(private film: FilmService) {
    this.pippoCAZZO = film;
    
  }


  ngOnInit(): void {
    this.film.getDataPopular().subscribe(data => {
      this.popularFilm = data
    }
    )
  }
  switchCarosello() {
    this.isCollapsed = !this.isCollapsed2;
    this.isCollapsed2 = !this.isCollapsed;
  }

  saveId(idCliccato: string) {
    this.idCliccato = idCliccato;
    console.log(idCliccato);
  }


}



