import { Injectable } from '@angular/core';
import {Task} from '../task';
import {Tasks} from '../tasks';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    //const tasks = of(Tasks);

    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task:Task): Observable<Task> {
    const url = this.apiUrl+"/"+task.id;
    return this.http.delete<Task>(url);
  }

  changeTaskReminder(task:Task): Observable<Task> {
    const url = this.apiUrl+"/"+task.id;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
