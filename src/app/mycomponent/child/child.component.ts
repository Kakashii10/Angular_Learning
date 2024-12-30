import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  // @Input() pName:string='';
  //@Input() pDataList:any;

  cList: any = [
    {
      name: 'abs',
      marks: 67,
    },
  ];

  pushtoChild(name: any, marks: any) {
    console.log(name, marks);
    this.cList.push({ name, marks });
    return name + ' is added with ' + marks;
  }
}
