import { getRobots } from './arrays';

describe( 'Array tests',  () => {

    it( 'should return at least 3 robots (string)',  () => {

        const res = getRobots();

        expect( res.length ).toBeGreaterThanOrEqual(3);

    });

    it( 'should return an array containing MegaMan and Ultron',  () => {

        const res = getRobots();

        expect( res ).toContain('MegaMan');
        expect( res ).toContain('Ultron');

    });

});
