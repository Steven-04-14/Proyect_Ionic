import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizzAbecedarioPage } from './quizz-abecedario.page';

describe('QuizzAbecedarioPage', () => {
  let component: QuizzAbecedarioPage;
  let fixture: ComponentFixture<QuizzAbecedarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzAbecedarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
