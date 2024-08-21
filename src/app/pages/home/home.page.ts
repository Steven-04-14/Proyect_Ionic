import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  constructor() {

    }

  ngOnInit() {
  }
  playSound(){
    let audio = new Audio
    audio.src = "../assets/sounds/seleccionar.wav";
    audio.load();
    audio.play();
  }
  playSound1(){
    let audio = new Audio
    audio.src = "../assets/sounds/intro.wav";
    audio.load();
    audio.play();
  }

}
