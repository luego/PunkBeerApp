import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BeerModel } from '../models/beer-model';
import { Observable, of } from 'rxjs';
import { ErrorModel } from '../models/error-model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PunkbeerapiService {
  private api = 'https://api.punkapi.com/v2/beers';

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) {}

  /**
   * Get all beers
   */
  getBeers(): Observable<BeerModel[]> {
    let params = new HttpParams();
    params = params.append('page', '1');
    params = params.append('per_page', '25');

    return this.httpClient
      .get<BeerModel[]>(this.api, { params: params })
      .pipe(catchError(this.handleError<BeerModel[]>('getBeers')));
  }

  /**
   * Get a single beer. Id must be greater than 0
   * @param id number
   */
  getById(id: number): Observable<BeerModel> {
    return this.httpClient
      .get<BeerModel>(`${this.api}/${id}`)
      .pipe(catchError(this.handleError<BeerModel>('getById')));
  }

  /**
   * Gets a random beer from the API, this takes no paramaters.
   */
  getBeersRandom(): Observable<Array<BeerModel>> {
    return this.httpClient
      .get<Array<BeerModel>>(`${this.api}/random`)
      .pipe(catchError(this.handleError<Array<BeerModel>>('getBeers')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: ErrorModel): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PunkbeerapiService: ${message}`);
  }
}
