
export interface AboutPayload {
  updatedOn?: string;
  hasCompletionCertificate?: boolean;
  hasRealWorldProjects?: boolean;
  duration?: string;
  level?: string;
  about?: string;
}

export interface CourseContentSummary
{
  totalSections?: string;
  totalLectures?: string;
  totalHours?: string;
  sections?: Lesson[]
}

export interface Section {
  id?: string;
  name?: string;
  description?: string;
  totalHours?: string;
  totalLectures?: string;
  lectures?: Lectures[]
}

export interface Lesson {
  id?: string;
  name?: string;
  postion?: number;
  totalLectures?: number;
  description?: string;
  duration?: string;
  lectures?: Lectures[]
}
export interface Lectures {
  id?:string;
  name?: string;
  position?: number;
  parts?: any[];
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
  contentSummary?: CourseContentSummary;
  reviewSummary?: ReviewSummary;
}

export interface Student {
  id: string;
  name: string;
  img: string;
}

export interface Review {
  id: string;
  rating: number;
  review: string;
  student: Student;
  date?: string;
}

export interface ReviewSummary {
  rating: number;
  totalReviews: number;
  totalStudents: number;
  totalFives: number;
  totalFours: number;
  totalThrees: number;
  totalTwos: number;
  totalOnes: number;
  reviews: Review[];
}
