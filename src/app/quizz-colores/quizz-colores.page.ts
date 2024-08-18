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
      text: "¿Cual es el color del Báculo Sagrado?",
      imagen: "assets/img/goku-color-rojo.png",
      options: [
        { text: "🔵", correct: false },
        { text: "🔴", correct: true },
        { text: "🟢", correct: false },
        { text: "🟡", correct: false }
      ]
    },
    {
      text: "¿Cuál es el color del traje de Vegeta?",
      imagen: "assets/img/vegeta-color-azul.png",
      options: [
        { text: "🔵", correct: true },
        { text: "🟠", correct: false },
        { text: "🟡", correct: false },
        { text: "🔴", correct: false }
      ]
    },
    {
      text: "¿De que color es el dragon ?",
      imagen: "assets/img/shenlong-color-verde.png",
      options: [
        { text: "🟣", correct: false },
        { text: "🟢", correct: true },
        { text: "🔴", correct: false },
        { text: "⚫", correct: false }
      ]
    },
    {
      text: "¿De que color es la nube voladora?",
      imagen: "assets/img/nube-color-amarillo.png",
      options: [
        { text: "🔴", correct: false },
        { text: "🟠", correct: false },
        { text: "🟡", correct: true },
        { text: "🔵", correct: false }
      ]
    },
    {
      text: "¿De que color es el traje de Goku Black?",
      imagen: "assets/img/goku-color-negro.png",
      options: [
        { text: "⚪", correct: false },
        { text: "🔵", correct: false },
        { text: "⚫", correct: true },
        { text: "🟣", correct: false }
      ]
    },
    {
      text: "¿De que color es el cabello de Goku?",
      imagen: "assets/img/ultra-color-blanco.png",
      options: [
        { text: "⚫", correct: false },
        { text: "🟠", correct: false },
        { text: "🟣", correct: false },
        { text: "⚪", correct: true }
      ]
    },
    {
      text: "¿De que color son las esferas del dragon?",
      imagen: "assets/img/esferas.png",
      options: [
        { text: "🟠", correct: true },
        { text: "🟡", correct: false },
        { text: "🟣", correct: false },
        { text: "🔵", correct: false }
      ]
    },
    {
      text: "¿De que color es el dragon?",
      imagen: "assets/img/dragon-color-morado.png",
      options: [
        { text: "🟢", correct: false },
        { text: "🟣", correct: true },
        { text: "🔵", correct: false },
        { text: "🟠", correct: false }
      ]
    },
    {
      text: "¿De que color es Majin Buu?",
      imagen: "assets/img/majin-color-rosa.png",
      options: [
        { text: "🟣", correct: false },
        { text: "🟤", correct: false },
        { text: "💖", correct: true },
        { text: "🔵", correct: false }
      ]
    },
    {
      text: "¿De que color es la tortuga?",
      imagen: "assets/img/tortuga-color-marron.png",
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
