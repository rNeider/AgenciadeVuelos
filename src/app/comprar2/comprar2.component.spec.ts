import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comprar2Component } from './comprar2.component';

describe('Comprar2Component', () => {
  let component: Comprar2Component;
  let fixture: ComponentFixture<Comprar2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comprar2Component]
    });
    fixture = TestBed.createComponent(Comprar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
