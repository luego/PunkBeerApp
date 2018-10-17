import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { FavoriteModel } from '../models/favorite-modal';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  constructor(private storage: LocalStorageService) {
    // this.storage.clear();
    const beers: FavoriteModel[] = JSON.parse(this.storage.retrieve('beers'));
    if (beers === null) {
      this.storage.store('beers', JSON.stringify([]));
    }
  }

  saveValue(id: string, value: boolean) {
    this.storage.store(id, value);
  }

  retrieveValue(id: string): boolean {
    return this.storage.retrieve(id);
  }

  setValue(id: number, value: boolean) {
    const beers: FavoriteModel[] = JSON.parse(this.storage.retrieve('beers'));
    const beer = beers.find(x => x.id === id);
    if (beer) {
      beer.value = value;
    } else {
      beers.push({ id: id, value: value });
    }

    this.storage.store('beers', JSON.stringify(beers));
  }

  getValue(id: number) {
    const beers: FavoriteModel[] = JSON.parse(this.storage.retrieve('beers'));
    const beer = beers.find(x => x.id === id);
    return beer ? beer.value : false;
  }

  getAll(): FavoriteModel[] {
    return JSON.parse(this.storage.retrieve('beers'));
  }
}
