import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MedicsService {

  constructor( public http: HttpClient ) { }

  getMedics() {
    return this.http.get('...')
                .pipe(map( resp => resp['medicos'] ));
  }

  addMedic( medic: any ) {
    return this.http.post('...', medic )
                .pipe(map( resp => resp['medic'] ));
  }

  deleteMedic( id: string ) {
    return this.http.delete('...' )
                .pipe(map( resp => resp['medic'] ));
  }

}
