import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rbody',
  templateUrl: './rbody.component.html',
  styleUrls: ['./rbody.component.css']
})
export class RbodyComponent implements OnInit {
  showSpinner: boolean = true;
  constructor() { }
 
  ngOnInit(): void {
  }
  getData() {
    this.showSpinner = true;
   
    this.showSpinner = false; 
  }
}
