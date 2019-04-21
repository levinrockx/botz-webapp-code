import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutcomponentComponent } from './layoutcomponent.component';

describe('LayoutcomponentComponent', () => {
  let component: LayoutcomponentComponent;
  let fixture: ComponentFixture<LayoutcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
