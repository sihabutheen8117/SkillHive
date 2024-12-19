import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map  ,switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/course';

  constructor(private http: HttpClient) { }

  course : any[] = []

  getCourses(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((courses) => {
        this.course = courses; 
        return courses;
      })
    );
  }

  createAssessment(courseId: number, assessmentData: any): Observable<any> {

    return this.http.get<any[]>(this.apiUrl).pipe(
      map(courses => {
        const course = courses.find(course => course.courseId === courseId);
        if (course) {
     
          course.assessment =assessmentData;
          const courseIdInDb = course.id;
          console.log(`${this.apiUrl}/${courseIdInDb}`)

          return course;
        } else {
          throw new Error('Course not found');
        }
      }),
      switchMap((course) => {
        return this.http.patch<any>(`${this.apiUrl}/${course.id}`, course, {
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
  }
}
