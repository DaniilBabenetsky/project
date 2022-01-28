import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumComponent } from './hum.component';

describe('HumComponent', () => {
  let component: HumComponent;
  let fixture: ComponentFixture<HumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
