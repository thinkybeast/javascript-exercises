$(function() {
  App = {
    hours: $('#hours'),
    minutes: $('#minutes'),
    seconds: $('#seconds'),
    cSeconds: $('#centiseconds'),


    updateDisplay: function() {
      var value;
      ['cSeconds', 'seconds', 'minutes', 'hours'].forEach(function(unit) {
        value = String(this.timer[unit]).padStart(2, '0');
        this[unit].text(value);
      }.bind(this));
    },

    resetStopwatch: function() {
      // this.cSeconds = this.cSecondsTimer();
      this.pauseWatch($('a[data-id=run]'));
      this.timer =  { cSeconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
      };

      this.updateDisplay();
    },

    toggleStopwatch: function(e) {
      var $button = $(e.target);
      switch($button.attr('data-action')){
        case 'start':
          this.startWatch($button);
          break;
        case 'pause':
          this.pauseWatch($button);
          break;
      }
    },

    pauseWatch: function($button) {
      clearInterval(this.interval);
      $button.attr('data-action', 'start');
      $button.text('Start');
    },

    startWatch: function($button) {
      this.interval = setInterval(this.updateStopWatch.bind(this), 10);

      $button.attr('data-action', 'pause');
      $button.text('Stop');
    },

    updateStopWatch: function() {
      this.timer.cSeconds += 1;
      if(this.timer.cSeconds === 100) {
        this.timer.cSeconds = 0;
        this.timer.seconds += 1;
      }

      if(this.timer.seconds === 60) {
        this.timer.seconds = 0;
        this.timer.minutes += 1;
      }
      if(this.timer.minutes === 60) {
        this.timer.minutes = 0;
        this.timer.hours += 1;
      }

      this.updateDisplay();

    },

    bindEvents: function() {
      $('a[data-id=run]').on('click', this.toggleStopwatch.bind(this));
      $('a[data-id=reset').on('click', this.resetStopwatch.bind(this));
    },

    init: function() {
      this.resetStopwatch();
      this.bindEvents();
    },
  };

  App.init();
});