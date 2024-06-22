export const COURSE_SUMMARY = `
        query {
          courseById(id: __id) {
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
      `

export const USER_COURSE_PROGRESS = `
        query {
          courseByUserAndCourse(courseId: __courseId, userId: __userId) {
            id
            name
            description
            startDate
            endDate
            duration
            isCompleted
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
              completedSections
              sections {
                id
                name
                description
                position
                duration
                totalLectures
                completedLectures
                lectures {
                  id
                  name
                  position
                  completedQuizzes
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
        }`;
