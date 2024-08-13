import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz-numeros',
  templateUrl: './quizz-numeros.page.html',
  styleUrls: ['./quizz-numeros.page.scss'],
})
export class QuizzNumerosPage implements OnInit {

  quizName: string = 'quizz-abecedario';
  quizNumber: number;
  questions = [
    {
      text: '¿Cuál es el número natural más pequeño?',
      options: [
        { text: '0', correct: true },
        { text: '1', correct: false },
        { text: '2', correct: false },
        { text: '3', correct: false }
      ]
    },
    {
      text: '¿Cuál es el siguiente número natural después del 5?',
      options: [
        { text: '6', correct: true },
        { text: '7', correct: false },
        { text: '4', correct: false },
        { text: '8', correct: false }
      ]
    },
    {
      text: '¿Qué número es mayor que 3 pero menor que 5?',
      options: [
        { text: '2', correct: false },
        { text: '4', correct: true },
        { text: '6', correct: false },
        { text: '3', correct: false }
      ]
    },
    {
      text: '¿Cuál es el resultado de 2 + 2?',
      options: [
        { text: '3', correct: false },
        { text: '4', correct: true },
        { text: '5', correct: false },
        { text: '6', correct: false }
      ]
    },
    {
      text: '¿Qué número viene justo antes del 10?',
      options: [
        { text: '9', correct: true },
        { text: '8', correct: false },
        { text: '7', correct: false },
        { text: '11', correct: false }
      ]
    },
    {
      text: '¿Cuál de estos números es un número impar?',
      options: [
        { text: '4', correct: false },
        { text: '6', correct: false },
        { text: '7', correct: true },
        { text: '8', correct: false }
      ]
    },
    {
      text: '¿Qué número es el doble de 3?',
      options: [
        { text: '5', correct: false },
        { text: '6', correct: true },
        { text: '7', correct: false },
        { text: '8', correct: false }
      ]
    },
    {
      text: '¿Qué número es el triple de 2?',
      options: [
        { text: '4', correct: false },
        { text: '6', correct: true },
        { text: '8', correct: false },
        { text: '9', correct: false }
      ]
    },
    {
      text: '¿Cuál es el número par más pequeño?',
      options: [
        { text: '0', correct: true },
        { text: '1', correct: false },
        { text: '2', correct: false },
        { text: '3', correct: false }
      ]
    },
    {
      text: '¿Cuál es la suma de 7 y 5?',
      options: [
        { text: '11', correct: false },
        { text: '12', correct: true },
        { text: '13', correct: false },
        { text: '14', correct: false }
      ]
    }
  ]
  currentQuestionIndex: number = 0;
  question: any;
  timer: number = 30;
  progress: number = 0;
  score: number = 0;
  interval: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.quizNumber = +this.route.snapshot.paramMap.get('quizz-numeros');
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

  finishQuiz() {
    this.router.navigate(['/resultados'], {
      state: {
        score: this.score,
        quizName: this.quizName,
        totalQuestions: this.questions.length
      }
    });
  }

}
