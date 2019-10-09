import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendanaanComponent } from './pendanaan.component';

describe('PendanaanComponent', () => {
  let component: PendanaanComponent;
  let fixture: ComponentFixture<PendanaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendanaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendanaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
