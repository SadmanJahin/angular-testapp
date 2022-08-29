import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private http:HttpClient) { }

  getTaskData()
  {
    return this.http.get("https://localhost:7199/api/Task/getTask")
  }
}
