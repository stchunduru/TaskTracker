import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'Task Tracker';
  showAddTask:boolean;
  subscription:Subscription;

  constructor(private uiService:UiService) { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log('toggle');
  }

}
