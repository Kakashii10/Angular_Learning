import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  imports: [CommonModule],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css',
})
export class NgifComponent {
  isVaild = true;
  ChangeData(valid:boolean) {
    this.isVaild = valid;
  }
}
