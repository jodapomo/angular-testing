import { userLogged } from './booleans';

describe( 'Boolean tests',  () => {

    it( 'should return true',  () => {

        const res = userLogged();

        expect( res ).toBeTruthy();

    });

});
