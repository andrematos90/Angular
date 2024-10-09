import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizacaoCondicionalComponent } from './renderizacao-condicional.component';

describe('RenderizacaoCondicionalComponent', () => {
  let component: RenderizacaoCondicionalComponent;
  let fixture: ComponentFixture<RenderizacaoCondicionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderizacaoCondicionalComponent]
    });
    fixture = TestBed.createComponent(RenderizacaoCondicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
