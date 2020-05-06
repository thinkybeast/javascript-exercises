// We're putting together some information about our new company Space Design. Not all roles have been filled yet. But although we have a CEO and Scrum Master, displaying them shows undefined. Why is that?

// Roles (salary still to be determined)

var ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

var developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

var scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

var team = {};

team['ceo'] = 'Kim';
team['scrumMaster'] = 'Alice';
team['developer'] = undefined;

var company = {
  name: 'Space Design',
  team: team,
  projectedRevenue: 500000,
};

console.log('----{ ' + company.name + ' }----');
console.log('CEO: ' + company.team['ceo']);  // bracket notatation will evaluate expressions and use their result as the property name to be accessed. in this case, rather than accessing the team property 'ceo', js references the variable ceo defined on line 5, coerces the object value into a string, and attempts to reference a property with that string value. to resolve the error, we should use quotes around keys passed in as bracket notation unless we intend to use a variable expression.
console.log('Scrum master: ' + company.team['scrumMaster']);
console.log('Projected revenue: $' + company.projectedRevenue);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000