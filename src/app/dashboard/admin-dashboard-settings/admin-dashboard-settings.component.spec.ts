import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardSettingsComponent } from './admin-dashboard-settings.component';

describe('AdminDashboardSettingsComponent', () => {
  let component: AdminDashboardSettingsComponent;
  let fixture: ComponentFixture<AdminDashboardSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
