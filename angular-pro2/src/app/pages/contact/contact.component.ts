import { Component, OnInit } from '@angular/core';


interface MyObj {
  name : string | number,
  age : number,
  city : string,
  gender? : string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  obj : MyObj[] = [
    {
    name : "rahul",
    age : 25,
    city : "indore",
    gender : "male"
  },
  {
    name : "amar",
    age : 22,
    city : "mumbai",
    gender : "male"
  },
  {
    name : "jaya",
    age : 23,
    city : "pune",
    gender : "female"
  }
]

  color : [string,string,string]= ["red" , "green", "blue"]

}
