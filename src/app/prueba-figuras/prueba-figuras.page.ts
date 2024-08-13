import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba-figuras',
  templateUrl: './prueba-figuras.page.html',
  styleUrls: ['./prueba-figuras.page.scss'],
})
export class PruebaFigurasPage implements OnInit {

  userName: string = '';

  constructor(private router: Router) { }

  startQuiz1() {
    if (this.userName) {
      localStorage.setItem('userName', this.userName);
      this.router.navigate(['/quizz-figuras']);
    } else {
      alert('Por favor, ingresa tu nombre');
    }
  }

  ngOnInit() {
  }

}
