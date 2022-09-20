import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   name = "rohan"



  // Events Methods
  demo1(a:any){
   // console.log("hello world");
    this.name = a;
  }

}
