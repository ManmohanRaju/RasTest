import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OstfAppDocChecklistEditComponent } from './ostf-app-doc-checklist-edit.component';

describe('OstfAppDocChecklistEditComponent', () => {
  let component: OstfAppDocChecklistEditComponent;
  let fixture: ComponentFixture<OstfAppDocChecklistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstfAppDocChecklistEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstfAppDocChecklistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
