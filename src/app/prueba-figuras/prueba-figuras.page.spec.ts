import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaFigurasPage } from './prueba-figuras.page';

describe('PruebaFigurasPage', () => {
  let component: PruebaFigurasPage;
  let fixture: ComponentFixture<PruebaFigurasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaFigurasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
