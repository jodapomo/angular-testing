import { FormRegistered } from './forms';
import { FormBuilder } from '@angular/forms';


describe('Forms test',  () => {

    let component: FormRegistered;

    beforeEach(  () => component = new FormRegistered( new FormBuilder() ) );

    it( 'Should create a form with 2 fields, email and password',  () => {

        expect( component.form.contains('email') ).toBeTruthy();
        expect( component.form.contains('password') ).toBeTruthy();

    });

    it('Email must be required',  () => {
        const control = component.form.get('email');
        control.setValue('');

        expect( control.valid ).toBeFalsy();
    });

    it('Email must be a valid email',  () => {
        const control = component.form.get('email');
        control.setValue('aaa@aaa.com');

        expect( control.valid ).toBeTruthy();
    });

});
