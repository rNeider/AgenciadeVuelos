import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comprar3Component } from './comprar3.component';

describe('Comprar3Component', () => {
  let component: Comprar3Component;
  let fixture: ComponentFixture<Comprar3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comprar3Component]
    });
    fixture = TestBed.createComponent(Comprar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
