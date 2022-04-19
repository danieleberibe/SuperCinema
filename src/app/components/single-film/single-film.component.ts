import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { FilmService } from 'src/app/service/film.service';
import { CaroselloCardComponent } from '../carosello-card/carosello-card.component';
@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.css']
})
export class SingleFilmComponent implements OnInit {
  preUrl="https://image.tmdb.org/t/p/original/";
  id: string;
  dataFilm: any = [];
  constructor(private activatedRoute: ActivatedRoute,  private film: FilmService) { 
    
  }

  ngOnInit(): void  {
    
    this.activatedRoute.params.subscribe(p => {
      this.id = p['idCliccato'];
    });   
    
    console.log(this.id);
    
    this.film.getSingleFilmData(this.id).subscribe(data => {
      this.dataFilm = data
      console.log(this.dataFilm);
    })
  }

}
