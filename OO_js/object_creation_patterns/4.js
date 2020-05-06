// In this exercise, you'll add a mixin to the previous exercise. The mixin adds an invoice and payTax methods.

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};
Person.prototype.communicate = function() {
  console.log(this.firstName, 'Communicating.');
};
Person.prototype.eat = function() {
  console.log(this.firstName, 'Eating.');
};
Person.prototype.sleep = function() {
  console.log(this.firstName, 'Sleeping.');
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function () {
  console.log('Dr. ' + this.firstName + ' Diagnosing.');
}

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this,firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log('Teaching');
}

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log(this.firstName, 'Studying.');
};

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function () {
  console.log(this.firstName, 'Researching.')
};

var professional = {
  invoice: function() {
    console.log(this.firstName, this.lastName, 'is Billing customers');
  },
  payTax: function() {
    console.log(this.firstName, this.lastName, 'is paying taxes');
  },
}


function delegate(contextObj, methodOwner, methodName, ...args) {
  return function (){
    return methodOwner[methodName].apply(contextObj, args);
  }
}

function extend(obj, mixin) {
  Object.keys(mixin).forEach(function(methodName) {
    obj[methodName] = function(...args) {
      return mixin[methodName].apply(obj, args);
    };
  })

  return obj;
}


var doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

var professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'