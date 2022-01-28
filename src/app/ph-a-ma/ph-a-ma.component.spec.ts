import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhAMaComponent } from './ph-a-ma.component';

describe('PhAMaComponent', () => {
  let component: PhAMaComponent;
  let fixture: ComponentFixture<PhAMaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhAMaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhAMaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
