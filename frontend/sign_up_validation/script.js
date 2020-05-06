$(function(){
  const FormValidation = {

    cacheElements: function() {
      this.$form = $('form');
      this.$formMessage = $('#message');
      this.$firstName = $('input[name=firstname]');
      this.$lastName = $('input[name=lastname]');
      this.$cardNumbers = $('input[name=credit_card]');
    },

    bindEvents: function() {
      this.$form.on('blur', 'input', this.handleBlur.bind(this));
      this.$form.on('focus', 'input', this.handleFocus.bind(this));
      this.$form.on('submit', this.handleSubmit.bind(this));
      this.$cardNumbers.on({
        'keypress': this.blockNonNumbers.bind(this),
        'input': this.autoTab.bind(this)
      });

      [this.$firstName, this.$lastName, ].forEach($el => {
        $el.on('keypress', this.blockNonAlpha.bind(this));
      });
    },

    handleSubmit: function(e) {
      e.preventDefault();
      if(this.noValidationErrors()) {
        this.showSuccessMessage();
        this.displayRequestData(e.target);
      } else {
        this.validateAllControls();
        this.showFixMessage();
      }
    },

    handleBlur: function(e) {
      const $control = $(e.target);
      if(this.noValidationErrors()) {
        this.$formMessage.text("");
      }
      if(!this.validateControl($control)) {
        $control.addClass('invalid');
      }
    },

    handleFocus: function(e) {
      const $control = $(e.target);
      $control.removeClass('invalid');
      this.getErrorSpan($control).text("");
    },

    noValidationErrors: function() {
      return $('form')[0].checkValidity();
    },

    validateControl: function($control) {
      this.$errorSpan = this.getErrorSpan($control);
      if ($control[0].validity.valueMissing) {
        this.errorRequired();
        return false;
      } else if ($control[0].validity.patternMismatch) {
        this.errorPattern();
        return false;
      }
      return true;
    },

    validateAllControls: function() {
      $('input').each((_, el) => {
        this.validateControl($(el));
      });
    },

    displayRequestData: function(form) {
      const data = new FormData(form);
      const requestStr = this.buildRequestString(data);
      $('#formdata').show().find('p').text(requestStr);

    },

    buildRequestString: function(data) {
      const requestComponents = [];
      var entries = data.entries();
      let pair;
      let key;
      let value;
      for(pair of entries) {
        if (pair[0] === 'credit_card') {
          continue;
        }
        key = encodeURIComponent(pair[0]);
        value = encodeURIComponent(pair[1]);
        requestComponents.push(`${key}=${value}`);
      }
      let cardNums = data.getAll('credit_card').join('');
      requestComponents.push(`credit_card=${cardNums}`);
      return requestComponents.join('&');
    },


    getErrorSpan: function($control) {
      if($control.attr('name') === 'credit_card') {
        $control = $control.parent();
      }
      return $control.next('span.validation_error');
    },

    errorRequired: function() {
      const inputName = this.$errorSpan.attr('data-error');
      this.$errorSpan.text(`${inputName} is a required field.`);
    },

    errorPattern: function() {
      const inputName = this.$errorSpan.attr('data-error');
      const errorText = (inputName === "Password") ? `${inputName} must be at least 10 characters.` : `Please enter a valid ${inputName}.`;

      this.$errorSpan.text(errorText);
    },

    autoTab: function(e) {
      const $control = $(e.target);
      const len = $control.val().length;
      const $next = $control.nextAll('input').eq(0);
      if(len === 4 && $next.length > 0) {
        $next.focus();
      }
    },

    blockNonAlpha: function(e) {
      const pattern = new RegExp($(e.target).attr('pattern'), 'g');
      if(!pattern.test(e.key)){
        e.preventDefault();
      }
    },

    blockNonNumbers: function(e){
      const pattern = new RegExp(/\d/);
      if(!pattern.test(e.key)){
        e.preventDefault();
      }
    },

    showSuccessMessage: function() {
      this.$formMessage.show().text("Successfully signed up!").addClass('success');
    },

    showFixMessage: function() {
      this.$formMessage.show().text("Form cannot be submitted until errors are corrected.");
    },

    init: function() {
      this.cacheElements();
      this.bindEvents();
    },
  };

  FormValidation.init();
});


/*

HTML
- set required, pattern, example text, etc

CSS
- make :invalid CSS

CACHE INPUTS

ONFOCUS
- get that input's adjacent span
- span's text content = ''
- reset input's validity

ONBLUR
- invoke that input's error validation
  - input.checkValidity()
    - will trigger invalid event if not valid
- if reportValidity() === true
  - hide "must fix errors"

ERROR HANDLING
- bind event listeners for focus, blur and invalid events

INVALID EVENTS
- get adjacent validation_error span
firstname
  - set span text to "First Name is a required field."
lastname
  - set span text to "Last Name is a required field."
email
  - if val() = ""
    - set span text to "Email is a required field."
  - else
    - set span text to "Please Enter a valid Email."
password
  - if val() = ""
    - set span text to "Password is a required field."
  - else
    - set span text to "Password must be at least 10 characters long."
phone
  - set span text to "Please Enter a valid Phone Number."

ON SUBMIT
- prevent default
- reportValidity()
  - if false, show "must fix errors"
  - if true, show "Sign up successful"
*/
