import { Component, Input, OnInit } from '@angular/core';
import {  Movie } from '../movies/movie.interface';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() m!: Movie;
  @Input() i!: number;

  favorites!: any
  isFav: boolean = false;
  filt: any

  constructor(private movieSrv: MoviesService) { }

  ngOnInit(): void {
    this.getFavorite()
  }

  getFavorite() {
    this.movieSrv.getFav().subscribe((res) => {
      this.favorites = res
      let x = this.favorites.find((f: any) => f.movieId == this.m.id)
      if (x) {
        this.isFav = true
        this.filt = x

      } else {
        this.isFav = false
      }
    })
  }

  addFav(idM: number, i: number) {
    this.movieSrv.getFav().subscribe((res) => {
      this.favorites = res
      let x = this.favorites.find((f: any) => f.movieId == this.m.id)
      if (x) {
        this.isFav = true
        this.filt = x

      } else {
        this.isFav = false
      }

    })
    this.movieSrv.addFavorite(idM).subscribe(res => {
      console.log(res);
      this.isFav = true
    })
  }

  removeFav() {
    console.log(this.filt.id);

    this.movieSrv.removeFavorite(this.filt.id).subscribe(res => {
      console.log(res);
    })
    this.isFav = false
  }
}
