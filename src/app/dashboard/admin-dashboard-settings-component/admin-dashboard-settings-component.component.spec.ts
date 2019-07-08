import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardSettingsComponentComponent } from './admin-dashboard-settings-component.component';

describe('AdminDashboardSettingsComponentComponent', () => {
  let component: AdminDashboardSettingsComponentComponent;
  let fixture: ComponentFixture<AdminDashboardSettingsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardSettingsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardSettingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
