import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'subtopic',
  templateUrl: './subtopic.component.html',
  styleUrls: ['./subtopic.component.scss']
})
export class SubtopicComponent implements OnInit {
  @Input('group') // app.component.html line 23 reference binding
  
  public subtopicForm: FormGroup; // subtopic.component.html line 1 binding
  
  constructor() { }

  ngOnInit() {
  }

}
