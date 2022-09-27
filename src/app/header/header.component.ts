import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search='';
  @Input() d1: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
