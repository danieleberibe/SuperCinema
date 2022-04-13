import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
  styleUrls: ['./carosello.component.css']
})
export class CaroselloComponent implements OnInit {
  comingFilm: any = [];
  preurl = 'https://image.tmdb.org/t/p/original/'
  constructor(private film:FilmService) { 
    this.film.getDataLatest().subscribe(data=>{
      this.comingFilm = data
    })
  }

  ngOnInit(): void {
  }

}
