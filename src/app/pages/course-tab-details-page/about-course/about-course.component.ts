import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-course',
  templateUrl: './about-course.component.html',
  styleUrl: './about-course.component.scss'
})
export class AboutCourseComponent implements OnInit, OnDestroy{

  keyAspectsOfCourse: any | undefined;
  aboutResponseBody: any | undefined;

  constructor() {
  }

  ngOnInit(){
    this.keyAspectsOfCourse = {
      createdAt: ' January 28, 2024',
      certificateType: 'Completion Certificate',
      offers: 'Real-World Projects',
      duration: '2 Months',
      level: 'Beginner'
    }

    this.aboutResponseBody = {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
        '      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
        '      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n' +
        '      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n',
      courseLearn: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
        '      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
        '      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n' +
        '      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n',
      courseFor: '\'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\\n\' +\n' +
        '        \'      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\\n\' +\n' +
        '        \'      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\\n\' +\n' +
        '        \'      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\\n\''
    }
  }

  ngOnDestroy(){

  }
}
