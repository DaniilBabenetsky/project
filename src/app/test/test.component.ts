import { IType, ITypeScore } from './type.model';
import { Component, OnInit } from '@angular/core';
import { IQuestion } from './question.model';

type Answer = { [type: string]: {score: number, text: string} }
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions: IQuestion[] = [
    {
      number: 1,
      first_option: {
        text: 'Точные науки', typeScores: [
          {
            type: 'it',
            score: 1
          },
          {
            type: 'phmth',
            score: 1
          },
        ]
      },
      second_option: {
        text: 'Гуманитарные науки', typeScores: [
          {
            type: 'medic',
            score: 1
          },
          {
            type:'soc',
            score:1
          },
          {
            type:'hum',
            score:1
          }
        ]
      }
      ,
    },
    {
      number: 2,
      first_option: { text: 'Обучаться, уча четкие правила', typeScores:[
      {
        type:'it',
        score:2
      },
      {
        type:'phmth',
        score:2
      },
      {
        type:'soc',
        score:2
      },
    ]},
      second_option: { text: 'Обучаться, принимая различные точки зрения', typeScores:[
        {
          type:'hum',
          score:2
        },
        {
          type:'media',
          score:2
        }
      ]},
    },
    {
      number: 3,
      first_option: { text: 'Я люблю рисовать', typeScores:[
        {
          type:'media',
          score:3
        },
        {
          type:'hum',
          score:2
        }
      ]},
      second_option: { text: 'Я люблю чертить', typeScores:[
        {
          type:'it',
          score:1
        },
        {
          type:'phmth',
          score:1
        }
      ]},
    },
    {
      number: 4,
      first_option: { text: 'Мне нравится получать знания о вещах из реального мира', typeScores:[
        {
          type:'medic',
          score:3
        },
        {
          type:'soc',
          score:1
        },
        {
          type:'media',
          score:3
        }
      ]},
      second_option: { text: 'Мне нравится получать знания об абстрактных вещах', typeScores:[
        {
          type:'hum',
          score:3
        },
        {
          type:'phmth',
          score:2
        },
        {
          type:'it',
          score:2
        }
      ]},
    },
    {
      number: 5,
      first_option: { text: 'Мне нравится получать знания, уча термины и законы', typeScores:[
        {
          type:'medic',
          score:3
        },
        {
          type:'soc',
          score:3
        }
      ]},
      second_option: { text: 'Мне нравится получать знания, понимая механику работы чего-либо', typeScores:[
        {
          type:'it',
          score:2
        },
        {
          type:'phmth',
          score:2
        }
      ]},
    },
    {
      number: 6,
      first_option: { text: 'Знать ответ на вопрос, но не уметь доказать свою позицию', typeScores:[
        {
          type:'phmth',
          score:1
        },
        {
          type:'it',
          score:2
        }
      ]},
      second_option: { text: 'Не знать правельность своего ответа, но уметь доказать всем, что он верен',typeScores:[
        {
          type:'medic',
          score:2
        },
        {
          type:'hum',
          score:3
        }
      ]},
    },
    {
      number: 7,
      first_option: { text: 'Общаться с людьми', typeScores:[
        {
          type:'medic',
          score:2
        },
        {
          type:'soc',
          score:1
        },
        {
          type:'media',
          score:3
        }
      ]},
      second_option: { text: 'Проводить время в одиночестве', typeScores:[
        {
          type:'it',
          score:2
        },
        {
          type:'phmth',
          score:1
        }
      ]}
    }
  ];

  question: IQuestion;
  question_index: number = 0;

  answers: Answer = {};
  answer: string = '';
  constructor() {
    this.question = this.questions[this.question_index];
  }

  ngOnInit(): void {
    this.answers = {
      medic: { score: 0, text: "Вам подходит медецинский класс"},
      it: { score: 0, text: "Вам подходит IT класс"},
      media: { score: 0, text: "Вам подходит медиа класс"},
      soc: { score: 0, text: "Вам подходит социально-экономический класс"},
      hum: { score: 0, text: "Вам подходит гуманитарный класс"},
      phmth: { score: 0, text: "Вам подходит физико-математический класс"},
    }
  }

  changeQuestion(typeScores: ITypeScore[]) {
    console.log(this.answers);

    for (let typeScore of typeScores) {
      this.answers[typeScore.type].score += typeScore.score;
    }

    this.question_index++;

    if (this.question_index > this.questions.length - 1){
      this.answer = this.getMaxAnswer(this.answers);
    } else {
      this.question = this.questions[this.question_index];
      console.log(this.answers);
    }
  }
  getMaxAnswer(answers: Answer): string{
    let max = {type: '', score: 0};
    Object.keys(answers).forEach((key: string) => {
      if (answers[key].score > max.score) {
        max = {type: key, score: answers[key].score};
      }
    });

    return answers[max.type].text;
  }
}
