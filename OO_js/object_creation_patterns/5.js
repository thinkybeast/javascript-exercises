/*
Using OLOO create an Account prototype object that anonymizes user objects on init. The created object should not have access to the function that anonymizes a user other than through the init and reanonymize methods. The function that anonymizes creates a 16 character sequence composed of letters and numbers. The following are the properties and methods on the Account object:

init: The init method sets the email, password, firstName, lastName, and displayName of user. The displayName is a 16 character sequence generated for the user. It's used as the display name of a user.
reanonymize: This method generates a new 16 character sequence and reassigns it to the displayName property if the password provided is valid. Returns true if successfully re-anonymized. Returns 'Invalid Password' if the password provided is not valid.
resetPassword: This method asks the user for a new password and reassigns it to the password property. To reset the password, the user must provide the current password. Returns 'Invalid Password' if the password provided is not valid. Returns true if the password is successfully reset.
firstName: This method returns the first name of the user if the password provided is valid. Returns 'Invalid Password' if the password provided is not valid.
lastName: This method returns the last name of the user if the password provided is valid. Returns 'Invalid Password' if the password provided is not valid.
email: This method returns the email name of the user if the password provided is valid. Returns 'Invalid Password' if the password provided is not valid.
displayName: This property returns the displayName — the 16 character sequence.
Other than the above properties, methods, and properties inherited from Object.prototype, no other method or property should exist on the object returned by the Account prototype object.

Here's a sample for your reference:
*/

function NewAccount() {
  function generateDisplayName(){
    let result = '';
    let index, i;
    for (i = 0; i < 16; i += 1) {
      index = Math.floor(Math.random() * 26);
      result += alphaChars[index];
    }
    return result;
  }

  function invalidPassword(passAttempt) {
    return password !== passAttempt;
  }

  const alphaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let email, password, firstName, lastName;

  return {
    init: function(userEmail, userPassword, userFirstName, userLastName) {

      email = userEmail;
      password = userPassword;
      firstName = userFirstName;
      lastName = userLastName
      this.displayName = generateDisplayName();
      return this;
    },
    reanonymize: function(passAttempt) {
      if (invalidPassword(passAttempt)) {
        return "Invalid password";
      } else {
        this.displayName = generateDisplayName();
        return true;
      }
    },
    resetPassword: function(passAttempt, newPass) {
      if (invalidPassword(passAttempt)) {
        return "Invalid password";
      } else {
        password = newPass;
        return true;
      }
    },
    firstName: function(passAttempt) {
      if (invalidPassword(passAttempt)) {
        return "Invalid password";
      } else {
        return firstName;
      }
    },
    lastName: function(passAttempt) {
      if (invalidPassword(passAttempt)) {
        return "Invalid password";
      } else {
        return lastName;
      }
    },
    email: function(passAttempt) {
      if (invalidPassword(passAttempt)) {
        return "Invalid password";
      } else {
        return email;
      }
    },
  };
}



var fooBar = Object.create(NewAccount()).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

var displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

var bazQux = Object.create(NewAccount()).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'baz' but should log foo.
console.log(fooBar.email('abc'));                  // 'baz@qux.com' but should 'foo@bar.com'