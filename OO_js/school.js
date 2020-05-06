// Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

// addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".

// enrollStudent: Enrolls a student in a course.

// addGrade: Adds the grade of a student for a course.

// getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.

// courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

function createSchool() {
  let school = {};
  school.students = [];

  school.addStudent = function (name, year) {
    if (!year.match(/(1st|2nd|3rd|4th|5th)/)) return "Invalid Year";
    let newStudent = createStudent(name, year);
    this.students.push(newStudent);

    return newStudent;
  }

  school.enrollStudent = function (applicant, course) {
    let studentToEnroll = this.students.find(function(student) {
      return student === applicant;
    })

    if (!studentToEnroll) return "Student not found";

    studentToEnroll.addCourse(course);
  };

  school.addGrade = function (student, courseName, grade) {
    let studentToGrade = this.students.find(function(enrolledStudent) {
      return student === enrolledStudent;
    })

    if (!studentToGrade) {
      return "Student not found";
    } else {
      studentToGrade.gradeCourse(courseName, grade)
    }
  };

  school.getReportCard = function (student) {
    console.log(`${student.name}'s course grades`)
    student.courses.forEach(function(course) {
      console.log(`${course.name}: ${course.grade || 'In progress'}`)
    })
  };

  school.courseReport = function(courseName) {
    let i;
    let enrolledStudents = this.students.filter(function(student) {
      let enrolled = student.getCourse(courseName)
      return enrolled && enrolled.grade;
    });
    let classGrades = enrolledStudents.map(function(enrolledStudent) {
      return enrolledStudent.getCourse(courseName).grade;
    });

    if (classGrades.length === 0) {
      console.log(`No grades submitted for ${courseName}.`)
      return;
    }

    let averageGrade = classGrades.reduce((sum, cur) => sum + cur, 0) / classGrades.length;


    console.log(`==${courseName} Grades==`)

    for (i = 0; i < enrolledStudents.length; i += 1) {
      student = enrolledStudents[i];
      console.log(`${student.name}: ${student.getCourse(courseName).grade}`);
    }

    console.log('----');
    console.log('Course average: ', averageGrade);
  };


  return school;
}


function createStudent(name, year) {
  let newStudent = {};

  newStudent.name = name;
  newStudent.year = year;
  newStudent.courses = [];

  newStudent.info = function() {
    console.log(`${this.name} is a ${year} year student.`);
  };

  newStudent.addCourse = function(course) {
    this.courses.push(course);
  };

  newStudent.getCourse = function(courseName) {
    return this.courses.find(function(course) {
      return course.name === courseName;
    })
  }

  newStudent.gradeCourse = function(courseName, grade) {
    let courseToGrade = this.getCourse(courseName);
    if (!courseToGrade) return "Course not found!";

    courseToGrade.grade = grade;
  }

  newStudent.listCourses = function() {
    this.courses.forEach(function(course) {
      console.log(course)
    });
  };

  newStudent.addNote = function(code, note) {
    let course = this.courses.find(function(course) {
      return course.code === code;
    })

    if (!course) return 'Course not found!';

    course.note = (course.note) ? course.note + '; ' + note : note;
  };

  newStudent.updateNote = function(code, note) {
    let course = this.courses.find(function(course) {
      return course.code === code;
    })

    if (!course) return 'Course not found!';

    course.note = note;
  };

  newStudent.viewNotes = function() {
    let i;
    let course;
    for (i = 0; i < this.courses.length ; i += 1) {
      course = this.courses[i];
      if (course.note) {
        console.log(`${course.name}: ${course.note}`)
      }
    }
  };

  return newStudent;
}

let mySchool = createSchool();
let foo = mySchool.addStudent('foo', '3rd');
mySchool.enrollStudent(foo, {name: 'Math', code: 101});
mySchool.enrollStudent(foo, {name: 'Advanced Math', code: 102});
mySchool.enrollStudent(foo, {name: 'Physics', code: 202});
mySchool.addGrade(foo, 'Math', 95);
mySchool.addGrade(foo, 'Advanced Math', 90);

let bar = mySchool.addStudent('bar', '1st');
mySchool.enrollStudent(bar, {name: 'Math', code: 101});
mySchool.addGrade(bar, 'Math', 91);

let qux = mySchool.addStudent('qux', '2nd');
mySchool.enrollStudent(qux, {name: 'Math', code: 101});
mySchool.enrollStudent(qux, {name: 'Advanced Math', code: 102});
mySchool.addGrade(qux, 'Math', 93);
mySchool.addGrade(qux, 'Advanced Math', 90);


mySchool.getReportCard(foo);
mySchool.getReportCard(bar);
mySchool.getReportCard(qux);

mySchool.courseReport('Math');
mySchool.courseReport('Advanced Math');
mySchool.courseReport('Physics');
