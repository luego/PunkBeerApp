import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerModel } from '../models/beer-model';
import { PunkbeerapiService } from '../services/punkbeerapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beers$: Observable<BeerModel[]>;

  constructor(
    private http: PunkbeerapiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getBeers();
  }

  getBeers(): any {
    this.spinner.show();
    this.beers$ = this.http.getBeers().pipe(tap(x => this.spinner.hide()));
  }

  doSearch(value: string) {
    if (value === '') {
      this.getBeers();
    } else {
      this.spinner.show();
      this.beers$ = this.http.search(value).pipe(tap(x => this.spinner.hide()));
    }
  }
}
