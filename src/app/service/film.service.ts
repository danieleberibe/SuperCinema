import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) { }

  getDataPopular(){
    let url = "https://api.themoviedb.org/3/list/1221?api_key=05797c0b6fdd31b6eaf12d74f4bb9a67&language=en-US"
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
}
