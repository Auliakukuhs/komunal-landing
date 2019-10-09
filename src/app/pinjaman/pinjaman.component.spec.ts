import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinjamanComponent } from './pinjaman.component';

describe('PinjamanComponent', () => {
  let component: PinjamanComponent;
  let fixture: ComponentFixture<PinjamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinjamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinjamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
