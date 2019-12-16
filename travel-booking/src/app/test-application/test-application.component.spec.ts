import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestApplicationComponent } from './test-application.component';

describe('TestApplicationComponent', () => {
  let component: TestApplicationComponent;
  let fixture: ComponentFixture<TestApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
