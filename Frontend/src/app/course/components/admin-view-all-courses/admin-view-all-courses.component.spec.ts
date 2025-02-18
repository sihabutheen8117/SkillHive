import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCoursesComponent } from './admin-view-all-courses.component';

describe('AdminViewAllCoursesComponent', () => {
  let component: ViewAllCoursesComponent;
  let fixture: ComponentFixture<ViewAllCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
