import { Component, OnInit } from '@angular/core';
import data from 'src/assets/data.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
search1='';
data1:any;
  constructor() { }

  ngOnInit(): void {
  
this.data1=data;
  }
}
