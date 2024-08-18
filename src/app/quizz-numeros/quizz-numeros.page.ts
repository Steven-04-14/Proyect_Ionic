import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonImg } from '@ionic/angular';

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
      text: '¿Cuál es la esfera del Dragon mas pequeña?',
      imgPath: "assets/img/esferas.png",
      options: [
        {  text: '', correct: true, imgPath: "assets/img/esfera1.png"},
        { text: '', correct: false, imgPath: "assets/img/esfera2.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera3.png"},
        { text: '', correct: false, imgPath: "assets/img/esfera4.png"}
      ]
    },
    {
      text: '¿Cuál es el siguiente número natural después del 5?',
      options: [
        { text: '', correct: true, imgPath: "assets/img/esfera6.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera7.png"},
        { text: '', correct: false, imgPath: "assets/img/esfera4.png"},
        { text: '', correct: false, imgPath: "assets/img/esfera2.png" }
      ]
    },
    {
      text: '¿Qué número es mayor que 3 pero menor que 5?',
      options: [
        { text: '', correct: false, imgPath: "assets/img/esfera2.png" },
        { text: '', correct: true, imgPath: "assets/img/esfera4.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera6.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera3.png"}
      ]
    },
    {
      text: '¿Cuál es el resultado de 2 + 2?',
      options: [
        { text: '', correct: false,  imgPath: "assets/img/esfera3.png" },
        { text: '', correct: true,  imgPath: "assets/img/esfera4.png"},
        { text: '', correct: false, imgPath: "assets/img/esfera5.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera6.png" }
      ]
    },
    {
      text: '¿Qué número viene justo antes del 7?',
      options: [
        { text: '', correct: true, imgPath: "assets/img/esfera6.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera3.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera2.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera4.png" }
      ]
    },
    {
      text: '¿Cuál de estos números es un número impar?',
      options: [
        { text: '', correct: false, imgPath: "assets/img/esfera4.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera6.png" },
        { text: '', correct: true, imgPath: "assets/img/esfera7.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera2.png" }
      ]
    },
    {
      text: '¿Qué número es el doble de 3?',
      options: [
        { text: '', correct: false, imgPath: "assets/img/esfera5.png" },
        { text: '', correct: true, imgPath: "assets/img/esfera6.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera7.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera4.png" }
      ]
    },
    {
      text: '¿Qué número es el triple de 2?',
      options: [
        { text: '', correct: false, imgPath: "assets/img/esfera4.png" },
        { text: '', correct: true, imgPath: "assets/img/esfera6.png"},
        { text: '', correct: false, imgPath: "assets/img/esfera1.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera2.png" }
      ]
    },
    {
      text: '¿Cuál es el número par más pequeño?',
      options: [
        { text: '', correct: true, imgPath: "assets/img/esfera2.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera1.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera4.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera3.png" }
      ]
    },
    {
      text: '¿Cuál es la suma de 5 y 2?',
      options: [
        { text: '', correct: false, imgPath: "assets/img/esfera4.png" },
        { text: '', correct: true, imgPath: "assets/img/esfera7.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera6.png" },
        { text: '', correct: false, imgPath: "assets/img/esfera1.png" }
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
    this.router.navigate(['/home'], {
      state: {
        score: this.score,
        quizName: this.quizName,
        totalQuestions: this.questions.length
      }
    });
  }

}
