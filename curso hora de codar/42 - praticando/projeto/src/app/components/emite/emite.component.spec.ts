import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiteComponent } from './emite.component';

describe('EmiteComponent', () => {
  let component: EmiteComponent;
  let fixture: ComponentFixture<EmiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmiteComponent]
    });
    fixture = TestBed.createComponent(EmiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
