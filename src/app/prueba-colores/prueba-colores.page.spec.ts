import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaColoresPage } from './prueba-colores.page';

describe('PruebaColoresPage', () => {
  let component: PruebaColoresPage;
  let fixture: ComponentFixture<PruebaColoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaColoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
