import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicsComponent } from './intermediate/spies/medics.component';
import { MedicComponent } from './intermediate2/medic/medic.component';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncreaserComponent } from './intermediate2/increaser/increaser.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './advanced/routes/app.routes';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { RouterMedicComponent } from './advanced/router-medic/router-medic.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicsComponent,
    MedicComponent,
    HospitalComponent,
    IncreaserComponent,
    NavbarComponent,
    RouterMedicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
