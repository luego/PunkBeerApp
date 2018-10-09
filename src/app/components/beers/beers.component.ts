import { Component, OnInit, Input } from '@angular/core';
import { PunkbeerapiService } from '../../services/punkbeerapi.service';
import { Observable } from 'rxjs';
import { BeerModel } from '../../models/beer-model';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  @Input()
  beers: Observable<BeerModel[]>;

  constructor(private http: PunkbeerapiService) {}

  ngOnInit() {}
}
