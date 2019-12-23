import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaveMovieRatingService {
  
  url: any = "http://10.100.9.187:8087/ratingsdata/movies"

  constructor(private _http: HttpClient) { }

  add(saveRating: any) {
    let value = saveRating.movieValue;
    //console.log(value)
    return this._http.post<any>(`${this.url}/${value}`, saveRating).pipe(map(add => {

      return add;
    }))
  }

}
