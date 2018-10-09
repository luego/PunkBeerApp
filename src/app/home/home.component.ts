import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerModel } from '../models/beer-model';
import { PunkbeerapiService } from '../services/punkbeerapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beers$: Observable<BeerModel[]>;

  constructor(private http: PunkbeerapiService) {}

  ngOnInit() {
    this.getBeers();
  }
  getBeers(): any {
    this.beers$ = this.http.getBeers();
  }
}
