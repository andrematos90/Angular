import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FistComponentComponent } from './fist-component.component';

describe('FistComponentComponent', () => {
  let component: FistComponentComponent;
  let fixture: ComponentFixture<FistComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FistComponentComponent]
    });
    fixture = TestBed.createComponent(FistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
