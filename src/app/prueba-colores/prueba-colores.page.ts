import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba-colores',
  templateUrl: './prueba-colores.page.html',
  styleUrls: ['./prueba-colores.page.scss'],
})
export class PruebaColoresPage implements OnInit {

  userName: string = '';

  constructor(private router: Router) { }

  startQuiz1() {
    if (this.userName) {
      localStorage.setItem('userName', this.userName);
      this.router.navigate(['/quizz-colores']);
    } else {
      alert('Por favor, ingresa tu nombre');
    }
  }

  ngOnInit() {
  }

}
