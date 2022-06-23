import { Component, OnInit } from '@angular/core';
import {Task} from '../../task';
import {Tasks} from '../../tasks';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Task[] = [];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) =>
      this.tasks = tasks);
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(() =>
      this.tasks = this.tasks.filter(f => f.id != task.id))
  }

  onToggle(task:Task){
    task.reminder = !task.reminder;
    this.taskService.changeTaskReminder(task).subscribe();
  }

  onAddTask(task:Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

  editTask(task:Task){
    this.taskService.editTask(task).subscribe();
  }

}
