import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealiseComponent } from './realise.component';

describe('RealiseComponent', () => {
  let component: RealiseComponent;
  let fixture: ComponentFixture<RealiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
