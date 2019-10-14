import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyaratketentuanComponent } from './syaratketentuan.component';

describe('SyaratketentuanComponent', () => {
  let component: SyaratketentuanComponent;
  let fixture: ComponentFixture<SyaratketentuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyaratketentuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyaratketentuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
