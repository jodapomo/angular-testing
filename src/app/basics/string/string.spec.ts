import { message } from './string';


describe( 'Strings tests',  () => {

    it( 'should return a string',  () => {

        const res = message('Jose');

        expect( typeof res ).toBe('string');

    });

    it( 'should return a string with the given name as parameter',  () => {

        const name = 'Juan';
        const res = message( name );

        expect( res ).toContain( name );

    });


});


