import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAdminDashboardComponent } from './blog-admin-dashboard.component';

describe('BlogAdminDashboardComponent', () => {
  let component: BlogAdminDashboardComponent;
  let fixture: ComponentFixture<BlogAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
