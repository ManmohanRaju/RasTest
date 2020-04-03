import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OstfAppAdminDocChecklistEditComponent } from './ostf-app-admin-doc-checklist-edit.component';


describe('OstfAppAdminDocChecklistEditComponent', () => {
  let component: OstfAppAdminDocChecklistEditComponent;
  let fixture: ComponentFixture<OstfAppAdminDocChecklistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstfAppAdminDocChecklistEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstfAppAdminDocChecklistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
