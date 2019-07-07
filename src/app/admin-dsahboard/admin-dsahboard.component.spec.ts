import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDsahboardComponent } from './admin-dsahboard.component';

describe('AdminDsahboardComponent', () => {
  let component: AdminDsahboardComponent;
  let fixture: ComponentFixture<AdminDsahboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDsahboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDsahboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
