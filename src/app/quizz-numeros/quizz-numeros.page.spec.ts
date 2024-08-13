import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizzNumerosPage } from './quizz-numeros.page';

describe('QuizzNumerosPage', () => {
  let component: QuizzNumerosPage;
  let fixture: ComponentFixture<QuizzNumerosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzNumerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
