import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './course.component.html',
  providers : [ CourseService],
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{
  courses: any[] = [];

  constructor(private CourseService: CourseService , private router: Router) { }

  ngOnInit(): void {
    this.CourseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  goToAssessment(id : number ){
    this.router.navigate(['/assessment', id]);
  }
}
