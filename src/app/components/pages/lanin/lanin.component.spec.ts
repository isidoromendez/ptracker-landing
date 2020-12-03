import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaninComponent } from './lanin.component';

describe('LaninComponent', () => {
  let component: LaninComponent;
  let fixture: ComponentFixture<LaninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
