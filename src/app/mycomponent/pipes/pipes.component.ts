import {
  DatePipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  today: Date = new Date();
  msg: string = 'Angular practice ';
  // dateupdate(){
  //   setTimeout(() => {
  //     console.log("Delayed for 1 second.");
  //   }, 10000);
  // }
}
