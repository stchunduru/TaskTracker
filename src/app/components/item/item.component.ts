import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;
  @Output() onDeleteTask = new EventEmitter;
  @Output() onToggleReminder = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(task:Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task){
    this.onToggleReminder.emit();
  }

}
