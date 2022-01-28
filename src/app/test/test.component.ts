import { Component, OnInit } from '@angular/core';
import { IQuestion } from './question.model';

type Answer = { [type: string]: number }
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    questions: IQuestion[] = [
    {
      number: 1,
      first_option: { text: 'Точные науки', type: 'it'},
      second_option: { text: 'Гуманитарные науки', type: 'medic'},
    },
    {
      number: 2,
      first_option: { text: 'Обучаться, уча четкие правила', type: 'it'},
      second_option: { text: 'Обучаться, принимая различные точки зрения', type: 'medic'},
    },
    {
      number: 3,
      first_option: { text: 'Я люблю рисовать', type: 'it'},
      second_option: { text: 'Я люблю чертить', type: 'medic'},
    },
    {
      number: 4,
      first_option: { text: 'Мне нравится получать знания о вещах из реального мира', type: 'medic'},
      second_option: { text: 'Мне нравится получать знания об абстрактных вещах', type: 'it'},
    },
    {
      number: 5,
      first_option: { text: 'Мне нравится получать знания, уча термины и законы', type: 'it'},
      second_option: { text: 'Мне нравится получать знания, понимая механику работы чего-либо', type: 'medic'},
    },
    {
      number: 6,
      first_option: { text: 'Знать ответ на вопрос, но не уметь доказать свою позицию', type: 'it'},
      second_option: { text: 'Не знать правельность своего ответа, но уметь доказать всем, что он верен', type: 'medic'},
    },
    {
      number: 7,
      first_option: { text: 'Общаться с людьми', type: 'medic'},
      second_option: { text: 'Проводить время в одиночестве', type: 'it'},
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
      it: 0
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
