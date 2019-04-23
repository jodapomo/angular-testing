import { MedicsComponent } from './medics.component';
import { MedicsService } from './medics.service';
import { Observable } from 'rxjs';
import { of, empty, throwError } from 'rxjs';



describe('MedicsComponent Tests', () => {

    let component: MedicsComponent;
    const service = new MedicsService( null );

    beforeEach( () => {
        component = new MedicsComponent(service);
    });


    it('OnInit should load medics', () => {

        const medics = ['medic1', 'medic2', 'medic3'];

        spyOn( service, 'getMedics' ).and.callFake( () => {
            return of(medics);
        });

        component.ngOnInit();

        expect( component.medics.length ).toBeGreaterThan(0);

    });

    it('should call server for loading medics',  () => {
        const spy = spyOn( service, 'addMedic').and.callFake( (medic) => {
            return empty();
        });

        component.addMedico();

        expect( spy ).toHaveBeenCalled();
    });

    it('should add a new medic to medics array',  () => {
        const medic = { id: 1, name: 'Juan' };

        spyOn( service, 'addMedic' )
            .and.returnValue( of(medic) );

        component.addMedico();

        expect( component.medics.indexOf( medic ) ).toBeGreaterThanOrEqual(0);
    });

    it('if condition fails, error must be the same',  () => {

        const myError = 'the doctor could not be added';

        spyOn( service, 'addMedic').and
            .returnValue( throwError(myError) );

        component.addMedico();

        expect( component.messageError ).toBe( myError );

    });

    it('should call the server for delete a medic',  () => {

        spyOn( window, 'confirm').and.returnValue(true);

        const spy = spyOn( service, 'deleteMedic' )
            .and.returnValue( empty() );

        component.deleteMedic('1');

        expect( spy ).toHaveBeenCalledWith('1');
    });

    it('should not call the server for delete a medic',  () => {

        spyOn( window, 'confirm').and.returnValue(false);

        const spy = spyOn( service, 'deleteMedic' )
            .and.returnValue( empty() );

        component.deleteMedic('1');

        expect( spy ).not.toHaveBeenCalledWith('1');
    });


});
