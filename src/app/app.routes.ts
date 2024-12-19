import { Routes } from '@angular/router';
import { CourseComponent } from './assessmentgrading/components/instructor/course/course.component';
import { AssessmentComponent } from './assessmentgrading/components/instructor/assessment/assessment.component';

export const routes: Routes = [
    {
        path : 'course',
        component : CourseComponent
    },
    {
        path : 'assessment/:id',
        component : AssessmentComponent
    }
];
