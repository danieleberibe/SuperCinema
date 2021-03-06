import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  productListSource = new BehaviorSubject<any>(null); // creates the BehaviorSubject

  // You will use this method to store the data
  setProductList(data: any) {
     this.productListSource.next(data)
  }

  constructor(private http:HttpClient) { }

  getDataPopular(){
    let url = "http://localhost:8080/api/films/"
    return this.http.get(url);
  }
  getDataLatest(){
    let url = "https://api.themoviedb.org/3/list/3219?api_key=05797c0b6fdd31b6eaf12d74f4bb9a67&language=en-US"
    return this.http.get(url);
  }
  getDataGeneri(){
    let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=05797c0b6fdd31b6eaf12d74f4bb9a67&language=en-US"
    return this.http.get(url);
  }
  getSingleFilmData(id:string){
    let url = "http://localhost:8080/api/films/"+ id;
    return this.http.get(url)
  }
  getSale(){
    let url = "http://localhost:8080/api/sala";
    return this.http.get(url)
  }

  getOrario(){
    let url = "http://localhost:8080/api/orario";
    return this.http.get(url)
  }


 
}
