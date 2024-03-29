export interface Course {
  courseId?: string;
  title?: string;
  description?: string;
  instructor?: string;
  categoryId?: string;
  price?: string;
  discountedPrice?: string;
  startDate?: string;
  endDate?: string;
  numberOfStudents?: string;
  numberOfRatings?: string;
  previewVideo?: string;
  about?: AboutPayload;
  courseContent?: CourseContent
  courseInclude?: CourseDetail[];
  instructorDetails?: InstructorDetails;
  ratingsAndReviews?: RatingsAndReviews;
}

export interface AboutPayload {
  updatedOn?: string;
  hasCompletionCertificate?: boolean;
  hasRealWorldProjects?: boolean;
  duration?: string;
  level?: string;
  courseTopics?: [{
    topic?: string;
    description?: string
  }];
  targetAudience?: string[]
}

export interface CourseContentPayload
{
  numberOfSections?: string;
  numberOfLectures?: string;
  totalCourseDuration?: string;
  lessons?: Lesson[]
}
export interface Lesson {
  lessonId?: string;
  lessonTitle?: string;
  lessonDuration?: string;
  totalNumberOfLectures?: string;
  lectures?: Lectures[]
}
export interface Lectures {
  lectureId?:string;
  lectureTitle?: string;
  lectureDuration?: string;
  lectureContent?: string;
  lectureVideo?: string
}
export interface CourseDetail {
  title?: string;
  description?: string
}
export interface InstructorDetails {
  name?: string;
  profession?: string;
  perks?: [{ rating?: string; numberOfCourses?: string; numberOfStudents?: string; yearsOfExperience?: string}];
  description?: string;
  profilePicture?: string
}
export interface CourseContent {
  numberOfSections?: string;
  numberOfLectures?: string;
  totalCourseDuration?: string;
  lessons?: Lesson[];
}
export interface RatingsAndReviews {
  ratings?: {
    totalRatings?: number;
    averageRating?: number;
    fiveStarPercentage?: number;
    fourStarPercentage?: number;
    threeStarPercentage?: number;
    twoStarPercentage?: number;
    oneStarPercentage?: number;
  };
  reviews?:
    [{
      id?: string;
      userName?: string;
      rating?: number;
      comment?: string;
      timestamp?: string;
      userProfilePicture?: string;
    }]
}

export interface Courses {
  success?: true;
  message?: string;
  data: Data[];
  page?: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number
  }
}
export interface Data {
  id?: number;
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  instructorId?: string;
  price?: number;
  status?: string;
  instructors?: {
    instructorId?: string;
    instructorName?: string;
    profession?: string;
    instructorRating?: string;
    numberOfCourses?: number;
    numberOfStudents?: number;
    yearsOfExperience?: number;
    description?: string;
    profilePicture?: string
  } | undefined;
  category?: string;
  discountedPrice?: number;
  numberOfRatings?: number;
  updatedOn?: string;
  hasCompletionCertificate?: true;
  hasRealWorldProjects?: true;
  level?: string;
  targeAudience?: [
    string
  ];
  courseContents?: [
    {
      numberOfSections?: string;
      numberOfLectures?: string;
      totalCourseDuration?: string;
      lessons?: [
        {
          lessonId?: string;
          lessonDuration?: string;
          totalNumberOfLectures?: number;
          lectures?: [
            {
              lectureId?: string;
              lectureTitle?: string;
              lectureDuration?: string;
              lectureContent?: string;
              lectureVideo?: string
            }
          ];
          lessonTitle?: string
        }
      ]
    }
  ];
  courseInclude?: [
    string
  ]
}


export interface CourseDetail {
  id: number,
  name: string,
  description?: string,
  startDate: string,
  endDate: string,
  duration: string,
  instructorId: string,
  price: number,
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
      totalCourseDuration: string,
      lessons: [
        {
          lessonId: string,
          lessonDuration: string,
          totalNumberOfLectures: number,
          lectures: [
            {
              lectureId: string,
              lectureTitle: string,
              lectureDuration: string,
              lectureContent: string,
              lectureVideo: string
            }
          ],
          lessonTitle: string
        }
      ]
    }
  ],
  courseInclude: [
    string
  ]
}
