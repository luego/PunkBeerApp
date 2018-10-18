import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PunkbeerapiService } from '../services/punkbeerapi.service';
import { switchMap } from 'rxjs/operators';
import { BeerModel } from '../models/beer-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
  beer: BeerModel;
  constructor(
    private route: ActivatedRoute,
    private http: PunkbeerapiService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http.getById(id).subscribe(res => (this.beer = res));
  }
}
