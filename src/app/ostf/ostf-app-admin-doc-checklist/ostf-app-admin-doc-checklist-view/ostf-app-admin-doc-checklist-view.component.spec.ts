import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OstfAppAdminDocChecklistViewComponent } from './ostf-app-admin-doc-checklist-view.component';


describe('OstfAppAdminDocChecklistViewComponent', () => {
  let component: OstfAppAdminDocChecklistViewComponent;
  let fixture: ComponentFixture<OstfAppAdminDocChecklistViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstfAppAdminDocChecklistViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstfAppAdminDocChecklistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
