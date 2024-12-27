import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  name:string = 'mohit';
  Title='gello';
  data ='';
  onBtnClick(e :any){
    console.log(e)
    alert("ok")
  }
}
