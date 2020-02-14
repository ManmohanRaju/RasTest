import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OstfAppHeaderComponent } from './ostf-app-header.component';

describe('OstfAppHeaderComponent', () => {
  let component: OstfAppHeaderComponent;
  let fixture: ComponentFixture<OstfAppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstfAppHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstfAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
