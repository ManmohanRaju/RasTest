import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OstfApplicationComponent } from './ostf-application.component';

describe('OstfApplicationComponent', () => {
  let component: OstfApplicationComponent;
  let fixture: ComponentFixture<OstfApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstfApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstfApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
