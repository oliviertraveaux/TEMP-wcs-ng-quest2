import { Component } from '@angular/core';
import { Movie } from 'src/app/types/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  public showMovies: boolean = false;
}
