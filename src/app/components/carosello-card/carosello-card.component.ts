import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-carosello-card',
  templateUrl: './carosello-card.component.html',
  styleUrls: ['./carosello-card.component.css']
})
export class CaroselloCardComponent implements OnInit {
  popularFilm: any = [];
  
  generiFilm: any = [];
  preurl = 'https://image.tmdb.org/t/p/original/'
  
  constructor(private film:FilmService) { 
    this.film.getDataPopular().subscribe(data=>{
      this.popularFilm = data
    })

    

    this.film.getDataGeneri().subscribe(data=>{
      this.generiFilm = data
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  }

 


