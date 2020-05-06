// In an earlier exercise, we created a school object. It works, however, it can still be improved. The following are improvements for you to implement:

// Make the list students private. Right now, anyone can gain access to it and manipulate it.
// Make the constraint for allowed values for years private variable. As a private variable it avoids an unnecessary statement in the addStudent method and at the same time makes the code more declarative.
// Make the getCourse function accessible in the addGrade method also. As it is, only the courseReport method has access.

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(this.name + " is a " + this.year + " student");
    },

    listCourses: function() {
      return this.courses;
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    addNote: function(courseCode, note) {
      var course = this.courses.filter(function(course) {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += '; ' + note;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes: function() {
      this.courses.forEach(function(course) {
        if (course.note) {
          console.log(course.name + ': ' + course.note);
        }
      });
    },

    updateNote: function(courseCode, note) {
      var course = this.courses.filter(function(course) {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

// School object
var mySchool = (function() {
  let students = [];
  let validYears = ['1st', '2nd', '3rd', '4th', '5th'];

  let getCourse = function(student, courseName) {
    return student.listCourses().filter(function(course) {
      return course.name === courseName;
    })[0];
  };

  return {
    addStudent: function(name, year) {
      if (validYears.indexOf(year) >= 0) {
        var student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent: function(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode})
    },

    addGrade: function(student, courseName, grade) {
      var course = getCourse(student, courseName);

      if (course) {
        course.grade = grade;
      }
    },

    getReportCard: function(student) {
      student.listCourses().forEach(function(course) {
        if (course.grade) {
          console.log(course.name + ': ' + String(course.grade));
        } else {
          console.log(course.name + ': In progress');
        }
      });
    },

    courseReport: function(courseName) {

      var courseStudents = students.map(function(student) {
        var course = getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      }).filter(function(student) {
        return student.grade;
      });

      if (courseStudents.length > 0) {
        console.log('=' + courseName + ' Grades=');

        var average = courseStudents.reduce(function(total, student) {
          console.log(student.name + ': ' + String(student.grade));
          return total + student.grade;
        }, 0) / courseStudents.length;

        console.log('---');
        console.log('Course Average: ' + String(average));
      }
    },
  };
})();



let foo = mySchool.addStudent('foo', '3rd');
mySchool.enrollStudent(foo, 'Math', 101);
mySchool.enrollStudent(foo, 'Advanced Math', 102);
mySchool.enrollStudent(foo, 'Physics', 202);
mySchool.addGrade(foo, 'Math', 95);
mySchool.addGrade(foo, 'Advanced Math', 90);

let bar = mySchool.addStudent('bar', '1st');
mySchool.enrollStudent(bar, 'Math', 101);
mySchool.addGrade(bar, 'Math', 91);

let qux = mySchool.addStudent('qux', '2nd');
mySchool.enrollStudent(qux, 'Math', 101);
mySchool.enrollStudent(qux, 'Advanced Math', 102);
mySchool.addGrade(qux, 'Math', 93);
mySchool.addGrade(qux, 'Advanced Math', 90);


mySchool.getReportCard(foo);
mySchool.getReportCard(bar);
mySchool.getReportCard(qux);

mySchool.courseReport('Math');
mySchool.courseReport('Advanced Math');
mySchool.courseReport('Physics');