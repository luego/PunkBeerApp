import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  constructor(private storage: LocalStorageService) {}

  saveValue(id: string, value: boolean) {
    this.storage.store(id, value);
  }

  retrieveValue(id: string): boolean {
    return this.storage.retrieve(id);
  }
}
