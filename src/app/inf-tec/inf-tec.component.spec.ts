import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfTecComponent } from './inf-tec.component';

describe('InfTecComponent', () => {
  let component: InfTecComponent;
  let fixture: ComponentFixture<InfTecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfTecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
