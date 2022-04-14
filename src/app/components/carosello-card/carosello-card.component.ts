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
  id :string;
  popularFilm: any = [];

  preurl = 'https://image.tmdb.org/t/p/original/'

  pippo: FilmService;
  constructor(private film: FilmService ) {
    this.pippo = film;
    
  }


  ngOnInit(): void {
    this.pippo.getDataPopular().subscribe(data => {
      this.popularFilm = data
    }
    )
  }
  switchCarosello() {
    this.isCollapsed = !this.isCollapsed2;
    this.isCollapsed2 = !this.isCollapsed;
  }

  saveId(iddio: string) {
    this.id = iddio;

  }


}



