export interface EnrollCoursePayload {
  userId: string;
  courseId: number;
  paymentMethod?: string;
  paymentCode?: string;
  phn?: string;
}

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

export interface Instructor {
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

export interface LessonPart {
  id: number;
  lessonId: number;
  title: string;
  content: string;
  contentType: 'LECTURE' | 'VIDEO' | 'QUIZ';
  videoUrl?: string;
  position: number;
  quizId?: number;
  quizTitle?: string;
}


export const lessonParts: LessonPart[] = [
  { id: 1, lessonId: 1, title: 'Java Syntax Basics', content: 'This lesson covers basic syntax elements in Java programming language.', contentType: 'LECTURE', position: 1 },
  { id: 2, lessonId: 1, title: 'Variables and Data Types', content: 'Learn about variables and different data types in Java.', contentType: 'LECTURE', position: 2 },
  { id: 3, lessonId: 1, title: 'Conditional Statements', content: 'Understand how to use conditional statements like if, else, and switch in Java.', contentType: 'VIDEO', videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY', position: 3 },
  { id: 4, lessonId: 2, title: 'HTML Structure', content: 'Learn about the basic structure of HTML documents.', contentType: 'LECTURE', position: 1 },
  { id: 5, lessonId: 2, title: 'HTML Tags and Elements', content: 'Understand different HTML tags and elements.', contentType: 'VIDEO', videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY', position: 2 },
  { id: 6, lessonId: 2, title: 'Building Forms in HTML', content: 'Learn how to create forms and handle form inputs in HTML.', contentType: 'QUIZ', quizId: 1, position: 3 },
  { id: 7, lessonId: 3, title: 'Python Data Structures', content: 'Learn about lists, tuples, dictionaries, and sets in Python.', contentType: 'VIDEO', videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY', position: 1 },
  { id: 8, lessonId: 3, title: 'Working with Functions', content: 'Understand how to define and use functions in Python.', contentType: 'LECTURE', position: 2 },
  { id: 9, lessonId: 3, title: 'Modules and Packages', content: 'Learn about organizing code into modules and packages in Python.', contentType: 'LECTURE', position: 3 }
];

export interface Enrollment {
  id: number;
  userId: string;
  courseId: number;
  courseName: string;
  courseImgUrl: string;
  courseInstructorName: string;
  enrollmentDate: string;
  status: string;
  progress: number;
}

