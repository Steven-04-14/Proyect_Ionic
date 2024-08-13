import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba-abecedario',
  templateUrl: './prueba-abecedario.page.html',
  styleUrls: ['./prueba-abecedario.page.scss'],
})
export class PruebaAbecedarioPage implements OnInit {

  userName: string = '';

  constructor(private router: Router) { }

  startQuiz1() {
    if (this.userName) {
      localStorage.setItem('userName', this.userName);
      this.router.navigate(['/quizz-abecedario']);
    } else {
      alert('Por favor, ingresa tu nombre');
    }
  }

  ngOnInit() {
  }

}
