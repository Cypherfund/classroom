export interface CourseDTO {
  id: 0,
  name: string,
  description: string,
  startDate: string,
  endDate: string,
  duration: string,
  instructorId: string,
  price: 0,
  status: string,
  instructors: {
    instructorId: string,
    instructorName: string,
    profession: string,
    instructorRating: string,
    numberOfCourses: number,
    numberOfStudents: number,
    yearsOfExperience: number,
    description: string,
    profilePicture: string
  },
  category: string,
  discountedPrice: number,
  numberOfRatings: number,
  updatedOn: string,
  hasCompletionCertificate: true,
  hasRealWorldProjects: true,
  level: string,
  targeAudience: [
    string
  ],
  courseContents: [
    {
      numberOfSections: string,
      numberOfLectures: string,
      totalCourseDuration: string
    }
  ],
  courseInclude: [
    string
  ]
}
