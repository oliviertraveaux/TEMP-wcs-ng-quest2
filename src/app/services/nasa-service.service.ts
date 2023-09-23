import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ImgOfTheDay} from "../types/imgOfTheDay.interface";

@Injectable({
  providedIn: 'root'
})
export class NasaService {
private http = inject(HttpClient)

getImageOfTheDay(): Observable<ImgOfTheDay> {
  return this.http.get<ImgOfTheDay>('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-07-27')
}
}
