import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivasiComponent } from './privasi.component';

describe('PrivasiComponent', () => {
  let component: PrivasiComponent;
  let fixture: ComponentFixture<PrivasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
