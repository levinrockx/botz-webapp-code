import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogarticleComponent } from './blogarticle.component';

describe('BlogarticleComponent', () => {
  let component: BlogarticleComponent;
  let fixture: ComponentFixture<BlogarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
