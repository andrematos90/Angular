import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponenteComponent } from './first-componente.component';

describe('FirstComponenteComponent', () => {
  let component: FirstComponenteComponent;
  let fixture: ComponentFixture<FirstComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponenteComponent]
    });
    fixture = TestBed.createComponent(FirstComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
