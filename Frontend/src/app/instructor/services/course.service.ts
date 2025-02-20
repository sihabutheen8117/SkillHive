import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private http = inject(HttpClient);

  getCourseById(id: string): Observable<any> {
    return this.http.get<any>(`https://skillhive-backend.onrender.com/courses/${id}`);
  }

  getAllCourses(): Observable<any[]> {
    return this.http.get<any[]>(`https://skillhive-backend.onrender.com/courses`);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`https://skillhive-backend.onrender.com/courses/${id}`);
  }

  addCourse(course: any): Observable<any> {
    return this.http.post<any>(`https://skillhive-backend.onrender.com/courses`, course);
  }

  updateCourse(id: string, course: any): Observable<any> {
    return this.http.put<any>(`https://skillhive-backend.onrender.com/courses/${id}`, course);
  }

  deleteModule(courseId: string, moduleId: string): Observable<any> {
    return this.http.delete<any>(`https://skillhive-backend.onrender.com/courses/${courseId}/modules/${moduleId}`);
  }
}
