import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocEcComponent } from './soc-ec.component';

describe('SocEcComponent', () => {
  let component: SocEcComponent;
  let fixture: ComponentFixture<SocEcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocEcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocEcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
