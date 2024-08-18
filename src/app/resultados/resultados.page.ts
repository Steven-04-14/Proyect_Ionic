import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  userName: string;
  score: number;
  quizName: string;
  totalQuestions: number = 10; // Total de preguntas

  constructor(private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.score = +this.route.snapshot.paramMap.get('score');
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
