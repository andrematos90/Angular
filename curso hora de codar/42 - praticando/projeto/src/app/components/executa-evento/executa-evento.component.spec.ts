import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutaEventoComponent } from './executa-evento.component';

describe('ExecutaEventoComponent', () => {
  let component: ExecutaEventoComponent;
  let fixture: ComponentFixture<ExecutaEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutaEventoComponent]
    });
    fixture = TestBed.createComponent(ExecutaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
