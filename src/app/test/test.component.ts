import { Component, OnInit } from '@angular/core';
import { IQuestion } from './question.model';

type Answer = {[type: string]: number}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions: IQuestion[] = [
    {
      number: 1,
      first_option: { text: 'Обрабатывать фотографии с помощью компьютерных программ', type: 'programmer'},
      second_option: { text: 'Лечить людей или помогать им психологически', type: 'medic'},
    },
    {
      number: 2,
      first_option: { text: 'asd', type: 'programmer'},
      second_option: { text: 'sfafasfsa', type: 'medic'},
    },
  ];

  question: IQuestion;
  question_index: number = 0;

  answers: Answer = {};

  constructor() {
    this.question = this.questions[this.question_index];
   }

  ngOnInit(): void {
    this.answers = {
      medic: 0,
      programmer: 0
    }
  }

  changeQuestion(type: string) {
    console.log(type);

    if (type === '') {

    } else if (type === '') {
      this.answers[''] += 2;
      this.answers[''] += 1;

    }
    else {
      this.answers[type] += 1;
    }

    this.question_index++;
    this.question = this.questions[this.question_index];

    console.log(this.answers);

  }
}
