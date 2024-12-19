import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../../services/course.service';
import { HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [CommonModule , FormsModule, HttpClientModule],
  providers : [ CourseService],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.css'
})
export class AssessmentComponent implements OnInit{
  courses : any | undefined
  courseId : number | undefined ;
  courseTitle : string | undefined ;
  constructor(private route: ActivatedRoute , private courseService  : CourseService , private router: Router) {}

  questions : {
    question : string ,
    choices : string[],
    answer : null
  } [] = [] ;

  submittedData: any = null;


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = +params['id'];
      this.courseService.getCourses().subscribe(data => {
        this.courses = data;
        this.courseTitle = this.courses.find((course:any) => course.courseId === this.courseId).title
      });
      
    });
    
  }

  addQuestion(){
    this.questions.push({
      question: '',
      choices: ['', '', '', ''] ,
      answer: null
    });
  }

  submitData() {

    const assessmentData = {
      questions: this.questions
    };

    // Use the service to save the assessment data in the course's 'assessment' field
    if (this.courseId !== undefined) {
      this.courseService.createAssessment(this.courseId, assessmentData).subscribe(
        (response) => {
          this.submittedData = response;
          alert('Assessment saved successfully:');
          this.router.navigate(['/course']);
        },
        (error) => {
          alert('Error saving assessment:');
        }
      );
    }

  }

  backToCourse(){
    this.router.navigate(['/course']);
  }

  trackByFn(index: number, item: any): any {
    return index; 
  }
}