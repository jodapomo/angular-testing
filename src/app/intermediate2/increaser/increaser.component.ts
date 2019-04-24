import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: []
})
export class IncreaserComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  // tslint:disable-next-line:no-input-rename
  @Input('name') legend = 'Legend';
  @Input() progress = 50;

  // tslint:disable-next-line:no-output-rename
  @Output('updateValue') changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onChanges( newValue: number ) {

    if ( newValue >= 100 ) {
      this.progress = 100;
    } else if ( newValue <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.changeValue.emit( this.progress );

  }

  changevalue( value: number ) {

    if ( this.progress >= 100 && value > 0 ) {
      this.progress = 100;
      return;
    }

    if ( this.progress <= 0 && value < 0 ) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + value;

    this.changeValue.emit( this.progress );

  }

}
