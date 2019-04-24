
import { Routes } from '@angular/router';
import { HospitalComponent } from '../../intermediate2/hospital/hospital.component';
import { MedicComponent } from '../../intermediate2/medic/medic.component';
import { IncreaserComponent } from '../../intermediate2/increaser/increaser.component';



export const ROUTES: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'medic/:id', component: MedicComponent },
    { path: '**', component: IncreaserComponent },
];


