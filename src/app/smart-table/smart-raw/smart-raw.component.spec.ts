import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartRawComponent } from './smart-raw.component';

describe('SmartRawComponent', () => {
  let component: SmartRawComponent;
  let fixture: ComponentFixture<SmartRawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartRawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
