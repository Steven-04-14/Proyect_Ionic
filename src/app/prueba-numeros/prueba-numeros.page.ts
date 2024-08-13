import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba-numeros',
  templateUrl: './prueba-numeros.page.html',
  styleUrls: ['./prueba-numeros.page.scss'],
})
export class PruebaNumerosPage implements OnInit {

  userName: string = '';

  constructor(private router: Router) { }

  startQuiz2() {
    if (this.userName) {
      localStorage.setItem('userName', this.userName);
      this.router.navigate(['/quizz-numeros']);
    } else {
      alert('Por favor, ingresa tu nombre');
    }
  }

  ngOnInit() {
  }

}
