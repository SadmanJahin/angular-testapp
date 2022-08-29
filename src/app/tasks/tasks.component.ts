import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../services/fetchdata.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  isLoggedIn:boolean=JSON.parse(localStorage.getItem('loggedIn')||'false'); 
  list:any []=[];
    constructor(private data:FetchdataService) { 
    this.data.getTaskData().subscribe((value:any)=>{
      this.isLoggedIn=JSON.parse(localStorage.getItem('loggedIn')||'false'); 
      console.warn(value[0])
      this.list=value
    })

  }

  ngOnInit(): void {

    
  }






}
