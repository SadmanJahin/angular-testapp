import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-floating-btn',
  templateUrl: './floating-btn.component.html',
  styleUrls: ['./floating-btn.component.css']
})
export class FloatingBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(e:any) {

    
    e.stopPropagation();
    e.preventDefault();
    
    
   
    
   
}


}
