import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizzFigurasPage } from './quizz-figuras.page';

describe('QuizzFigurasPage', () => {
  let component: QuizzFigurasPage;
  let fixture: ComponentFixture<QuizzFigurasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzFigurasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
