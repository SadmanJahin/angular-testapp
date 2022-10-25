import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNopageComponent } from './error-nopage.component';

describe('ErrorNopageComponent', () => {
  let component: ErrorNopageComponent;
  let fixture: ComponentFixture<ErrorNopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorNopageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorNopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
