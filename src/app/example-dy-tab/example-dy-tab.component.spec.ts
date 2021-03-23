import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDyTabComponent } from './example-dy-tab.component';

describe('ExampleDyTabComponent', () => {
  let component: ExampleDyTabComponent;
  let fixture: ComponentFixture<ExampleDyTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDyTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
