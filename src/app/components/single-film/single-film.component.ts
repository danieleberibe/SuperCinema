import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaroselloCardComponent } from '../carosello-card/carosello-card.component';
@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.css']
})
export class SingleFilmComponent implements OnInit {
id: number;

  constructor(private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void  {this.activatedRoute.params.subscribe(p => {this.id = p['idCliccato'];});   
  
  }

}
