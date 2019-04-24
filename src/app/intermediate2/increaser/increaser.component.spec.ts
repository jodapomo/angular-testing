import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncreaserComponent } from './increaser.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Increaser Component', () => {

    let component: IncreaserComponent;
    let fixture: ComponentFixture<IncreaserComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncreaserComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncreaserComponent);
        component = fixture.componentInstance;

    });

    it('should display de legend', () => {

        component.legend = 'Progress';

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('Progress');

    });

    it( 'should siplay on input the progress value',  () => {

        component.changevalue(5);
        fixture.detectChanges();

        fixture.whenStable().then( () => {

            const input = fixture.debugElement.query( By.css('input') ).nativeElement;

            expect( input.value ).toBe('55');

        });


    });

    it('should increase/decrease  with a button click',  () => {

        const buttons = fixture.debugElement.queryAll( By.css('.btn-primary') );

        buttons[0].triggerEventHandler('click', null);
        expect( component.progress ).toBe(45);

        buttons[1].triggerEventHandler('click', null);
        expect( component.progress ).toBe(50);

    });

    it('title must display the progress', () => {

        const buttons = fixture.debugElement.queryAll( By.css('.btn-primary') );
        buttons[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        expect( elem.innerHTML ).toContain('45');

    });

});
