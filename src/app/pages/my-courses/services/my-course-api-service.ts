import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Apollo, gql } from 'apollo-angular';
import { USER_COURSE_PROGRESS } from '../../../services/course-service/course-data';
import { Observable } from 'rxjs';

@Injectable()
export class MyCourseApiService {

    constructor(private http: HttpService,
                private apollo: Apollo) { }

    getUserCourseProgress(userId: string, courseId: number): Observable<any> {
      return this.apollo.query({
        query: gql`${USER_COURSE_PROGRESS.replace('__courseId', courseId + '').replace('__userId', userId)}`
      });
    }

}
