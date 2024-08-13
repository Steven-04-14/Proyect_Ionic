import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz-abecedario',
  templateUrl: './quizz-abecedario.page.html',
  styleUrls: ['./quizz-abecedario.page.scss'],
})
export class QuizzAbecedarioPage implements OnInit {

  quizNumber: number;
  questions = [
    {
      text: "¿Cuál es el primer elemento del abecedario?",
      options: [
        {text: "A", correct: true},
        {text: "B", correct: false},
        {text: "C", correct: false},
        {text: "D", correct: false}
      ],
        "answer": "A"
    },
    {
      text: "¿Cuál de las siguientes letras es una vocal?",
      options: [
        { text: 'F', correct: false },
        { text: 'E', correct: true },
        { text: 'T', correct: false },
        { text: 'S', correct: false }
      ],
        "answer": "E"
    },
    {
      text: '¿Qué letra viene después de la G?',
      options: [
        { text: 'H', correct: true },
        { text: 'I', correct: false },
        { text: 'F', correct: false },
        { text: 'J', correct: false }
      ],
        "answer": "H"
    },
    {
      text: '¿Cuál es la última letra del abecedario?',
      options: [
        { text: 'Y', correct: false },
        { text: 'X', correct: false },
        { text: 'Z', correct: true },
        { text: 'W', correct: false }
      ],
        "answer": "Z"
    },
    {
      text: '¿Qué letra es la décima del abecedario?',
      options: [
        { text: 'J', correct: true },
        { text: 'K', correct: false },
        { text: 'I', correct: false },
        { text: 'L', correct: false }
      ],
        "answer": "J"
    },
    {
      text: '¿Qué letra viene antes de la M?',
      options: [
        { text: 'L', correct: true },
        { text: 'N', correct: false },
        { text: 'K', correct: false },
        { text: 'O', correct: false }
      ],
      "answer": "L"
    },
    {
      text: '¿Qué letra es una consonante?',
      options: [
        { text: 'U', correct: false },
        { text: 'E', correct: false },
        { text: 'D', correct: true },
        { text: 'O', correct: false }
      ],
      "answer": "D"
    },
    {
      text: '¿Cuál de las siguientes letras es una vocal?',
      options: [
        { text: 'R', correct: false },
        { text: 'A', correct: true },
        { text: 'T', correct: false },
        { text: 'B', correct: false }
      ],
      "answer": "A"
    },
    {
      text: '¿Qué letra viene después de la Q?',
      options: [
        { text: 'P', correct: false },
        { text: 'R', correct: true },
        { text: 'S', correct: false },
        { text: 'T', correct: false }
      ],
      "answer": "R"
    },
    {
      text: '¿Qué letra está en la mitad del abecedario?',
      options: [
        { text: 'L', correct: false },
        { text: 'M', correct: true },
        { text: 'N', correct: false },
        { text: 'O', correct: false }
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
