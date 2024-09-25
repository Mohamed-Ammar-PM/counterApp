import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllahuakbarComponent } from './allahuakbar.component';

describe('AllahuakbarComponent', () => {
  let component: AllahuakbarComponent;
  let fixture: ComponentFixture<AllahuakbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllahuakbarComponent]
    });
    fixture = TestBed.createComponent(AllahuakbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
