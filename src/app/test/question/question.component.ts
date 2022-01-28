import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOption } from '../question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() number: number | undefined;
  @Input() first_option: IOption | undefined;
  @Input() second_option: IOption | undefined;
  @Output() selectedOption: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selected(type: string) {
    this.selectedOption.emit(type);
  }
}