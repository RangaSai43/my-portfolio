import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  career_objective = 'Driving myself to learn and execute new things and am looking for an oppurtunity to be part of something bigger where i can utilize the skills i learnt';
  address = 'Ongole,Andhra Pradesh';
  contact = "+91 8464994716,  +91 8328085597";
  mail_id = "rangadu199@gmail.com";


  constructor() { }

  ngOnInit(): void {
  }

}
