import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlhamdhulillahComponent } from './alhamdhulillah.component';

describe('AlhamdhulillahComponent', () => {
  let component: AlhamdhulillahComponent;
  let fixture: ComponentFixture<AlhamdhulillahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlhamdhulillahComponent]
    });
    fixture = TestBed.createComponent(AlhamdhulillahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
