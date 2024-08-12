import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaAbecedarioPage } from './prueba-abecedario.page';

describe('PruebaAbecedarioPage', () => {
  let component: PruebaAbecedarioPage;
  let fixture: ComponentFixture<PruebaAbecedarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaAbecedarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
