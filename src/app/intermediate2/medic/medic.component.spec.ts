import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicComponent } from './medic.component';
import { MedicService } from './medic.service';
import { HttpClientModule } from '@angular/common/http';


describe('Medic component',  () => {

    let component: MedicComponent;
    let fixture: ComponentFixture<MedicComponent>;

    beforeEach( () => {

        TestBed.configureTestingModule({
            declarations: [
                MedicComponent,
            ],
            providers: [ MedicService ],
            imports: [ HttpClientModule ],
        });

        fixture = TestBed.createComponent( MedicComponent );
        component = fixture.componentInstance;

    });


    it('should create the component',  () => {

        expect( component ).toBeTruthy();

    });

    it('should return the greeting',  () => {

        const name = 'Juan';

        const res =  component.sayHello( name );

        expect( res ).toContain( name );

    });

});
