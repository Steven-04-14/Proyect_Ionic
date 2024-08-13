import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz-colores',
  templateUrl: './quizz-colores.page.html',
  styleUrls: ['./quizz-colores.page.scss'],
})
export class QuizzColoresPage implements OnInit {

  quizNumber: number;
  questions = [
    {
      text: "¿Cuál de estos es el color 'rojo'?",
      options: [
        { text: "🔵", correct: false },
        { text: "🔴", correct: true },
        { text: "🟢", correct: false },
        { text: "🟡", correct: false }
      ]
    },
    {
      text: "¿Cuál de estos es el color 'azul'?",
      options: [
        { text: "🔵", correct: true },
        { text: "🟠", correct: false },
        { text: "🟡", correct: false },
        { text: "🔴", correct: false }
      ]
    },
    {
      text: "¿Cuál de estos es el color 'verde'?",
      options: [
        { text: "🟣", correct: false },
        { text: "🟢", correct: true },
        { text: "🔴", correct: false },
        { text: "⚫", correct: false }
      ]
    },
    {
      text: "¿Cuál de estos es el color 'amarillo'?",
      options: [
        { text: "🔴", correct: false },
        { text: "🟠", correct: false },
        { text: "🟡", correct: true },
        { text: "🔵", correct: false }
      ]
    },
    {
      text: "¿Cuál de estos es el color 'negro'?",
      options: [
        { text: "⚪", correct: false },
        { text: "🔵", correct: false },
        { text: "⚫", correct: true },
        { text: "🟣", correct: false }
      ]
    },
    {
      text: "¿Cuál de estos es el color 'blanco'?",
      options: [
        { text: "⚫", correct: false },
        { text: "🟠", correct: false },
        { text: "🟣", correct: false },
        { text: "⚪", correct: true }
      ]
    },
    {
      text: "¿Cuál de estos es el color 'naranja'?",
      options: [
        { text: "🟠", correct: true },
        { text: "🟡", correct: false },
        { text: "🟣", correct: false },
        { text: "🔵", correct: false }
      ]
    },
    {
      text: "¿Cuál de estos es el color 'morado'?",
      options: [
        { text: "🟢", correct: false },
        { text: "🟣", correct: true },
        { text: "🔵", correct: false },
        { text: "🟠", correct: false }
      ]
    },
    {
      text: "¿Cuál de estos es el color 'rosa'?",
      options: [
        { text: "🟣", correct: false },
        { text: "🟤", correct: false },
        { text: "💖", correct: true },
        { text: "🔵", correct: false }
      ]
    },
    {
      text: "¿Cuál de estos es el color 'marrón'?",
      options: [
        { text: "🔴", correct: false },
        { text: "💖", correct: false },
        { text: "🟤", correct: true },
        { text: "⚫", correct: false }
      ]
    }
  ];
  currentQuestionIndex: number = 0;
  question: any;
  timer: number = 30;
  progress: number = 0;
  score: number = 0;
  interval: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.quizNumber = +this.route.snapshot.paramMap.get('quizz-abecedario');
    this.loadQuestion();
    this.startTimer();
  }

  loadQuestion() {
    this.question = this.questions[this.currentQuestionIndex];
    this.progress = this.currentQuestionIndex / this.questions.length;
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        this.nextQuestion();
      }
    }, 1000);
  }

  selectOption(option) {
    if (option.correct) {
      this.score++;
    }
    this.nextQuestion();
  }

  nextQuestion() {
    clearInterval(this.interval);
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.timer = 30;
      this.loadQuestion();
      this.startTimer();
    } else {
      this.router.navigate(['/resultados', { score: this.score }]);
    }
  }
}
