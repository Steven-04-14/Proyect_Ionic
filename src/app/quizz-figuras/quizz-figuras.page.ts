import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz-figuras',
  templateUrl: './quizz-figuras.page.html',
  styleUrls: ['./quizz-figuras.page.scss'],
})
export class QuizzFigurasPage implements OnInit {

  quizNumber: number;
  questions = [
    {
      text: "¿Cuál de estas es un círculo?",
      options: [
        { text: "⬛ Cuadrado", correct: false },
        { text: "⚪ Círculo", correct: true },
        { text: "🔺 Triángulo", correct: false },
        { text: "🔷 Rombo", correct: false }
      ]
    },
    {
      text: "¿Cuál de estas es un cuadrado?",
      options: [
        { text: "⬛ Cuadrado", correct: true },
        { text: "⚪ Círculo", correct: false },
        { text: "🔵 Óvalo", correct: false },
        { text: "🔶 Pentágono", correct: false }
      ]
    },
    {
      text: "¿Cuál de estas es un triángulo?",
      options: [
        { text: "🔺 Triángulo", correct: true },
        { text: "⚫ Círculo", correct: false },
        { text: "🟦 Rectángulo", correct: false },
        { text: "⬛ Cuadrado", correct: false }
      ]
    },
    {
      text: "¿Cuál de estas es un rectángulo?",
      options: [
        { text: "🔶 Pentágono", correct: false },
        { text: "⬛ Cuadrado", correct: false },
        { text: "🟦 Rectángulo", correct: true },
        { text: "🔵 Óvalo", correct: false }
      ]
    },
    {
      text: "¿Cuál de estas es un rombo?",
      options: [
        { text: "🔷 Rombo", correct: true },
        { text: "⬛ Cuadrado", correct: false },
        { text: "🔵 Óvalo", correct: false },
        { text: "🔶 Hexágono", correct: false }
      ]
    },
    {
      text: "¿Cuál de estas es un óvalo?",
      options: [
        { text: "🔵 Óvalo", correct: true },
        { text: "⚪ Círculo", correct: false },
        { text: "🔺 Triángulo", correct: false },
        { text: "⬛ Cuadrado", correct: false }
      ]
    },
    {
      text: "¿Cuál de estas es un pentágono?",
      options: [
        { text: "🔶 Pentágono", correct: true },
        { text: "⬛ Cuadrado", correct: false },
        { text: "⚪ Círculo", correct: false },
        { text: "🔵 Óvalo", correct: false }
      ]
    },
    {
      text: "¿Cuál de estas es un hexágono?",
      options: [
        { text: "🔶 Hexágono", correct: true },
        { text: "🔷 Rombo", correct: false },
        { text: "⬛ Cuadrado", correct: false },
        { text: "🔵 Óvalo", correct: false }
      ]
    },
    {
      text: "¿Cuál de estas es una estrella?",
      options: [
        { text: "⭐ Estrella", correct: true },
        { text: "🔵 Óvalo", correct: false },
        { text: "🔺 Triángulo", correct: false },
        { text: "🔷 Rombo", correct: false }
      ]
    },
    {
      text: "¿Cuál de estas es un trapecio?",
      options: [
        { text: "🔷 Rombo", correct: false },
        { text: "🟪 Trapecio", correct: true },
        { text: "🔵 Óvalo", correct: false },
        { text: "🔺 Triángulo", correct: false }
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
    this.quizNumber = +this.route.snapshot.paramMap.get('quizz-figuras');
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
