var person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// Read the following code carefully. What do you think is logged on line 7. Try to answer the question before you run the code.
// fullName's value references this. this points to the global object, so the value references the global properties firstName and lastName, which are undefined. As a result, fullName returns NaN
