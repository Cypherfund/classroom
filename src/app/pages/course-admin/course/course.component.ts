import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit{
enrollments!: any[];
sellectedEnrollment!: any;

  ngOnInit(): void {
    this.enrollments = this.getEnrollments();
  }

  getEnrollments() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Introduction to Programming',
        description: 'Learn the basics of programming.',
        email: 'info@example.com',
        start: '2024-04-01',
        instructorName: 'John Doe',
        duration: '2 hours',
        category: 'Computer Science',
        status: 'Active'
      },
      {
        id: '1001',
        code: 'g43h2gh3',
        name: 'Data Structures and Algorithms',
        description: 'Study fundamental data structures and algorithms.',
        email: 'info@example.com',
        start: '2024-04-15',
        instructorName: 'Jane Smith',
        duration: '3 hours',
        category: 'Computer Science',
        status: 'In Progress'
      },
      {
        id: '1002',
        code: 'u5g3563g2',
        name: 'Web Development Bootcamp',
        description: 'Master the essentials of web development.',
        email: 'info@example.com',
        start: '2024-04-20',
        instructorName: 'David Johnson',
        duration: '4 hours',
        category: 'Web Development',
        status: 'Active'
      },
      {
        id: '1003',
        code: 'y47g3634',
        name: 'Machine Learning Fundamentals',
        description: 'Explore the basics of machine learning.',
        email: 'info@example.com',
        start: '2024-05-01',
        instructorName: 'Emily Brown',
        duration: '5 hours',
        category: 'Data Science',
        status: 'In Progress'
      },
      {
        id: '1004',
        code: 't23g352d',
        name: 'Digital Marketing Essentials',
        description: 'Learn key concepts in digital marketing.',
        email: 'info@example.com',
        start: '2024-05-10',
        instructorName: 'Michael Wilson',
        duration: '2 hours',
        category: 'Marketing',
        status: 'Active'
      }
    ];
  }

}
