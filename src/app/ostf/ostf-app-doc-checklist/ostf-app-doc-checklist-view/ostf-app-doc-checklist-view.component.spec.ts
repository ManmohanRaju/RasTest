import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OstfAppDocChecklistViewComponent } from './ostf-app-doc-checklist-view.component';

describe('OstfAppDocChecklistViewComponent', () => {
  let component: OstfAppDocChecklistViewComponent;
  let fixture: ComponentFixture<OstfAppDocChecklistViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstfAppDocChecklistViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstfAppDocChecklistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
