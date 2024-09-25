import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDikhrComponent } from './other-dikhr.component';

describe('OtherDikhrComponent', () => {
  let component: OtherDikhrComponent;
  let fixture: ComponentFixture<OtherDikhrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherDikhrComponent]
    });
    fixture = TestBed.createComponent(OtherDikhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
