import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicComponent } from './router-medic.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';

class FakeRouter {
  navigate( params ) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = empty();

  private subject = new Subject();

  push( value ) {
    this.subject.next( value );
  }

  get params() {
    return this.subject.asObservable();
  }

}

describe('RouterMedicComponent', () => {
  let component: RouterMedicComponent;
  let fixture: ComponentFixture<RouterMedicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect to medic when saved', () => {
    const router = TestBed.get(Router);
    const spy = spyOn( router, 'navigate' );

    component.saveMedic();

    expect( spy ).toHaveBeenCalledWith(['medic', '123']);

  });

  it('should set id = new', () => {
    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push( { id: 'new' } );

    expect( component.id ).toBe('new');

  });


});
