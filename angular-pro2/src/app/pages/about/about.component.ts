import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  bgColor1 = "white";



  demo1(){
    this.bgColor1 = "green";
    }

    demo2(){
      this.bgColor1 = "yellow";
    }

}
