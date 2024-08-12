import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaNumerosPage } from './prueba-numeros.page';

describe('PruebaNumerosPage', () => {
  let component: PruebaNumerosPage;
  let fixture: ComponentFixture<PruebaNumerosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaNumerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
