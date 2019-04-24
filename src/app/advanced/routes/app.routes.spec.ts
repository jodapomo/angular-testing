import { ROUTES } from './app.routes';
import { MedicComponent } from 'src/app/intermediate2/medic/medic.component';


describe('Main routes',  () => {

    it('should exist medic/:id route', () => {

        expect( ROUTES ).toContain({
            path: 'medic/:id',
            component: MedicComponent
        });

    });

});
