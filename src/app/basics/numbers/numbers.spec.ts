import { increaser } from './number';


describe( 'Number tests',  () => {

    it( 'should return 100 if number is greater than 100',  () => {

        const res = increaser(300);

        expect( res ).toBe(100);

    });

    it( 'should return number + 1 if is not greater than 100',  () => {

        const number = 50;

        const res = increaser(number);

        expect( res ).toBe(number + 1);

    });


});
