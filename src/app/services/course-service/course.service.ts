import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CourseDetail, Courses} from "../../models/course";
import {environment} from "../../../environments/environment";
import {CourseTopicsDTO} from "../../models/courseTopics";
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  privateUrl = environment.CourseUrl

  constructor(private http: HttpClient,  private apollo: Apollo) { }

  getCourses(): Observable<Courses>{
    return this.http.get<Courses>(
      `${this.privateUrl}/courses?pageNum=0&size=20`
    )
  }
  getCourse(id: number): Observable<CourseDetail>{
    return this.http.get<CourseDetail>(
      `${this.privateUrl}/courses/${id}`
    )
  }

  getCourseGraphqls(id: number): Observable<any>{
    return this.apollo.query({
      query: gql`
        query {
          courseById(id: ${id}) {
            id
            name
            description
            startDate
            endDate
            duration
            subCourses {
              id
              name
              description
              startDate
              endDate
              duration
            }
            instructor {
              id
              name
              img
              title
              bio
              rating
              totalReviews
              totalStudents
              totalCourses
              yearsOfExperience
            }
            about
            price
            status
            type
            category {
              id
              name
            }
            issueCertificate
            discountedPrice
            level
            imgUrl
            perks
            reviewSummary {
              rating
              totalReviews
              totalStudents
              totalFives
              totalFours
              totalThrees
              totalTwos
              totalOnes
              reviews {
                id
                rating
                review
                student {
                  id
                  name
                  img
                }
              }
            }
            projects {
              id
              name
              description
              duration
              img
              content
              contentType
              videoUrl
              position
            }
            contentSummary {
              totalSections
              totalLectures
              totalHours
              sections {
                id
                name
                description
                position
                duration
                totalLectures
                lectures {
                  id
                  name
                  position
                  parts {
                    id
                    name
                    description
                    duration
                    content
                    contentType
                    videoUrl
                    position
                    quiz {
                      id
                      name
                      description
                      questions {
                        id
                        question
                        options
                        correctAnswer
                        explanation
                        position
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
  }

  saveCourseTopic(payload: CourseTopicsDTO, courseId: number, token: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post<any>(`${this.privateUrl}/courses/${courseId}/topics`,payload, {
      headers: headers
    })
  }

}
