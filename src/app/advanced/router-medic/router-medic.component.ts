import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-medic',
  templateUrl: './router-medic.component.html',
  styles: []
})
export class RouterMedicComponent implements OnInit {

  id: string;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .subscribe( params => {
        this.id = params['id'];
      });
  }

  saveMedic() {
    this.router.navigate(['medic', '123']);
  }

}
