import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistanceFinderComponent } from './resistance-finder.component';

describe('ResistanceFinderComponent', () => {
  let component: ResistanceFinderComponent;
  let fixture: ComponentFixture<ResistanceFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResistanceFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistanceFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
