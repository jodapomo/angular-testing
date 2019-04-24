import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicService {

  constructor( public http: HttpClient ) {}

  getMedics() {
    return this.http.get('...');
  }
}
