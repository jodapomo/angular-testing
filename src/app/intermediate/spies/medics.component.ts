import { Component, OnInit } from '@angular/core';
import { MedicsService } from './medics.service';

@Component({
  selector: 'app-medicos',
  template: `
    <p>
      medicos works!
    </p>
  `,
  styles: []
})
export class MedicsComponent implements OnInit {

  public medics: any[] = [];
  public messageError: string;

  constructor( public _medicService: MedicsService ) { }

  ngOnInit() {
    this._medicService.getMedics()
          .subscribe( medics => this.medics = medics );
  }

  addMedico() {
    const medic = { name: 'Medic Juan Carlos' };

    this._medicService.addMedic(medic)
          .subscribe(
            medicDB => this.medics.push(medicDB),
            err => this.messageError = err
          );
  }

  deleteMedic(id: string) {

    const confirmed = confirm('You are sure you want to delete this doctor');

    if ( confirmed ) {
      this._medicService.deleteMedic( id );
    }

  }

}
