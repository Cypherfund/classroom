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
      console.log(courseId, userId)
      return this.apollo.query({
        query: gql`${USER_COURSE_PROGRESS}`,
        variables: {
          courseId: courseId,
          userId: userId
        }
      });
    }

}
