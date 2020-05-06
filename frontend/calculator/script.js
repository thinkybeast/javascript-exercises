/*
data structure
- current screen entry
- operators array
- operands array

- press button
-- determine the button pressed
-- if number,
  -- if current entry is 0 or current result
    - replace entry with number
  -- else
    -- append to current entry string
-- if operation, perform operation (e.g. add neg sign, set entry/operation to 0)
-- if operator,
  -- take current entry and operator

  -- append number entry and operator entry to operationWindow
    -- concat to operation history, update operation window
  -- perform operation
    -- convert number entry to number
   -- perform operation between current result and entry, using current op
     -- store result in current result
     -- this.entry = result
     -- isresult = true
    -- update currentOperator to operator entry
    --
  - take value in entry window and append to operation
    - convert current entry string to number
    - add to operands a
  - insert result of current operation into entry screen
-- if equals
  -- take value in entry window and append to operation
  -- insert result to entry screen
  -- clear operations

- add equals, NEG, CE, C
*/

$(function(){
  var Calculator = {
    '+': function(num){
      return this.currentResult + num;
    },

    '-': function(num){
      return this.currentResult - num;
    },

    'x': function(num){
      return this.currentResult * num;
    },

    '/': function(num){
      return this.currentResult / num;
    },

    '%': function(num){
      return this.currentResult % num;
    },

    cacheElements: function() {
      this.$operation = $('#operation-window');
      this.$entry = $('#entry-window');
      this.$buttons = $('#buttons');
      this.isCurrentResult = false;
    },

    bindEvents: function() {
      this.$buttons.on('click', 'a', this.handleButton.bind(this));
    },

    handleButton: function(e) {
      e.preventDefault();
      var action = $(e.target).attr('data-type');
      var value = $(e.target).text();
      switch(action) {
        case "number":
          this.processNumber(value);
          break;
        case "operation":
          this.processOperation(value);
          break;
        case "operator":
          this.processOperator(value);
          break;
      }
    },

    processNumber: function(numberStr) {
      if(!this.entry) {
        this.entry = numberStr;
      } else {
        this.entry = this.entry + numberStr;
      }
      this.updateEntryWindow();
    },

    processOperator: function(operator) {
      this.saveEntry();
      this.appendToOpHistory(operator);
      this.performOperation();
      this.storeNextOperator(operator);
      this.updateEntryWindow();
    },

    processOperation: function(operation) {
      switch(operation) {
        case '=':
          this.operationHistory && this.performEquals();
          break;
        case 'C':
          this.clearScreen();
          break;
        case 'CE':
          this.clearEntry();
          break;
        case 'NEG':
          this.negateEntry();
          break;
      }
    },

    appendToOpHistory: function(operator) {
      this.operationHistory += ((this.entry || '0') + ' ' + operator + ' ');
      this.updateOpWindow();
    },

    performOperation: function() {
      var entry = this.getEntry();
      this.currentResult = this[this.currentOperator](entry);
      this.resetEntry();
    },

    resetOperation: function() {
      this.currentResult = 0;
      this.currentOperator = '+';
      this.operationHistory = '';
    },

    storeNextOperator: function(operator) {
      this.currentOperator = operator || '+';
    },

    performEquals: function(){
      this.performOperation();
      this.updateEntryWindow();
      this.resetOperation();
      this.updateOpWindow();
    },

    clearScreen: function() {
      this.resetOperation();
      this.resetEntry();
      this.updateOpWindow();
      this.updateEntryWindow();
    },

    clearEntry: function() {
      this.resetEntry();
      this.updateEntryWindow('0');
    },

    getEntry: function() {
      var negEntry;
      if(this.entry[0] === '-') {
        negEntry = +(this.entry.slice(1)) * -1;
      }
      return negEntry || +this.entry;
    },

    negateEntry: function(){
      this.saveEntry();
      if(this.entry) {
        this.entry = this.entry[0] === '-' ?  this.entry.slice(1) : '-' + this.entry;
      }
      this.updateEntryWindow();
    },

    saveEntry: function() {
      this.entry = this.$entry.text();
    },

    resetEntry: function() {
      this.entry = '';
    },


    updateOpWindow: function() {
      this.$operation.text(this.operationHistory);
    },
    updateEntryWindow: function(value) {
      this.$entry.text(value || this.entry || this.currentResult);
    },

    init: function() {
      this.cacheElements();
      this.bindEvents();
      this.clearScreen();
    },
  };

  Calculator.init();
});