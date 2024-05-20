import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {File} from "./File";

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private url = 'http://localhost/Assignment6_WP/php/crud/';
  constructor(private http : HttpClient) { };

  fetchFiles() : Observable<File[]>{
    return this.http.get<File[]>(this.url + 'read.php')
      .pipe(catchError(this.handleError<File[]>('fetchFiles', [])))
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
