import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizzColoresPage } from './quizz-colores.page';

describe('QuizzColoresPage', () => {
  let component: QuizzColoresPage;
  let fixture: ComponentFixture<QuizzColoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzColoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
