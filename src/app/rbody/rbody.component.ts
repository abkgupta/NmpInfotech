import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-rbody',
  templateUrl: './rbody.component.html',
  styleUrls: ['./rbody.component.css']
})
export class RbodyComponent implements OnInit {
  constructor() { }
 
  ngOnInit(): void {
  }
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
