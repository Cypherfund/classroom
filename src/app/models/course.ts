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
  about?: string;
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
  data: CourseDetail[];
  page?: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number
  }
}

interface Category {
  id: number;
  name: string;
  description: string;
}

interface Instructor {
  id: number;
  name: string;
  img: string;
  title: string;
  bio: string;
  rating: number;
  totalReviews: number;
  totalStudents: number;
  totalCourses: number;
  yearsOfExperience: number;
  userId: string;
}

export interface CourseDetail {
  category: Category;
  id: number;
  syllabus: string | null;
  requirements: string | null;
  prerequisites: string | null;
  position: number;
  perks: string | null;
  discountedPrice: number | null;
  discounted: boolean;
  about: string | null;
  imgUrl: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  duration: string;
  price: number;
  dtCreated: string;
  issueCertificate: boolean;
  status: string;
  type: string;
  level: string;
  instructor: Instructor;
  numberOfRatings: number;
  updatedOn: string | null;
  hasRealWorldProjects: boolean;
  courseContents: string | null;
}
