import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
  styleUrls: ['./carosello.component.css']
})
export class CaroselloComponent implements OnInit {
  comingFilm: any = [];
  preurl = 'https://image.tmdb.org/t/p/original/'
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor(private film:FilmService,config: NgbCarouselConfig) { 
    this.film.getDataLatest().subscribe(data=>{
      this.comingFilm = data
    })

    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
