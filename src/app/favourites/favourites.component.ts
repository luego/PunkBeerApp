import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerModel } from '../models/beer-model';
import { PunkbeerapiService } from '../services/punkbeerapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LocalService } from '../services/local.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  beers$: Observable<BeerModel[]>;

  constructor(
    private http: PunkbeerapiService,
    private spinner: NgxSpinnerService,
    private localService: LocalService
  ) {}

  ngOnInit() {
    this.getFavourites();
  }

  getFavourites() {
    this.spinner.show();
    const localIds = this.localService.getAll().filter(x => x.value === true);
    const ids = localIds.map(x => x.id);

    this.beers$ = this.http.getBeersByIds(ids).pipe(
      tap(x => this.spinner.hide()),
      map(this.setFavorites())
    );
  }

  private setFavorites(): (value: BeerModel[], index: number) => BeerModel[] {
    return (x: BeerModel[]) =>
      x.map((y: BeerModel) => {
        y.favorite = this.localService.getValue(y.id);
        return y;
      });
  }
}
