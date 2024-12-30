import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ChildComponent } from "../child/child.component";


@Component({
  selector: 'app-parent',
  imports: [FormsModule, ChildComponent,ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent  {

  @ViewChild(ChildComponent,{static:false})
  childComp : ChildComponent = new ChildComponent();

  name:string='';
  marks:string='';
  response: string='';
  dataList:any =[];
  // addData(name:any,marks :any){
  //     this.dataList.push({name: name,marks: marks});
  // }

  pushDataToChild(){
    console.log(this.name,this.marks);
    this.response = this.childComp.pushtoChild(this.name,this.marks);
  }
}
