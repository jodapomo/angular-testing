import { Component, OnInit } from '@angular/core';
import { MedicService } from './medic.service';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styles: []
})
export class MedicComponent implements OnInit {

  medics: any[] = [];

  constructor( public _medicService: MedicService ) { }

  ngOnInit() {
  }


  sayHello( name: string ) {
    return `Hi, ${name}`;
  }

  getMedics() {

    this._medicService.getMedics()
      .subscribe( (medics: any[]) => this.medics = medics);

  }

}
