import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Worker } from '../model/workers';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  date = new Date();
  emptyData: string = 'empty data';

  @Input() count!: number;
  @Input() workers!: Worker[];

  @Output() incrementEvent = new EventEmitter<number>();
  increment(i: number) {
    this.incrementEvent.emit(i);
    console.log('adder');
  }

  constructor() {}
}
