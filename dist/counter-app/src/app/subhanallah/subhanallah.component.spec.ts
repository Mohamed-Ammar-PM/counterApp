import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubhanallahComponent } from './subhanallah.component';

describe('SubhanallahComponent', () => {
  let component: SubhanallahComponent;
  let fixture: ComponentFixture<SubhanallahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubhanallahComponent]
    });
    fixture = TestBed.createComponent(SubhanallahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
