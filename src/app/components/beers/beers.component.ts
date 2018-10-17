import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerModel } from '../../models/beer-model';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  @Input()
  beers: Observable<BeerModel[]>;

  constructor(private localService: LocalService) {}

  ngOnInit() {}

  setFavorite(beer: BeerModel) {
    beer.favorite = !beer.favorite;
    this.localService.saveValue(beer.id.toString(), beer.favorite);
  }
}
