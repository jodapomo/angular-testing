import { IncreaserComponent } from './increaser.component';



describe('Increaser component unir', () => {

    let component: IncreaserComponent;

    beforeEach( () => component = new IncreaserComponent());

    it( 'Progres should be less or equal to 100', () => {

        component.progress = 50;
        component.changevalue(5);

        expect( component.progress ).toBe(55);

    });

});
