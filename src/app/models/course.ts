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
  targetAudience?:[{
    role?: string
  }]
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
