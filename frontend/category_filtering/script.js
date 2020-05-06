$(function(){
  var App = {
    allCars: [
      { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
      { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
      { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
      { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
      { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
      { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
      { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
    ],

    listingTemplate: Handlebars.compile($('#listing').html()),

    renderListings: function() {
      var html;

      this.allCars.forEach(function(car, idx) {
        car.id = idx;
        html = this.generateListing(car);
        this.$listings.append(html);
      }.bind(this));
    },

    generateListing: function(car) {
      return this.listingTemplate(car);
    },

    getUniqueValues: function(property) {
      var result = [];
      this.filteredCars.forEach(function(car) {
        if(result.indexOf(car[property]) === -1) {
          result.push(car[property]);
        }
      });
      return result;
    },

    appendOptions: function(attr) {
      this.getUniqueValues(attr).forEach(function(value){
        $("select[name=" + attr + "]").append(new Option(value));
      });
    },
    populateSelects: function() {
      ['make', 'model', 'price', 'year'].forEach(function(attr){
        this.appendOptions(attr);
      }.bind(this));
    },

    buildFilter: function(form) {
      var filters = $(form).serializeArray();
      return filters.reduce(function(result, select){
        if(select.value !== 'Any' && select.value !== 'All') {
         result[select.name] = select.value;
        }
        return result;
      }, {});
    },

    fetchResults: function(filter) {
      this.filteredCars = this.allCars.filter(function(car) {
        for(var option in filter) {
          if (String(car[option]) !== filter[option]) {
            return false;
          }
        }
        return true;
      });

      return this.filteredCars.map(function(car) {
        return car.id;
      });
    },

    renderResults: function(results) {
      $('#listings li').filter(function(idx) {
        return results.includes(idx);
      }).show();

      $('#listings li').filter(function(idx) {
        return !results.includes(idx);
      }).hide();

    },

    filterListings: function(e) {
      e.preventDefault();
      var filter = this.buildFilter(e.target);
      var results = this.fetchResults(filter);
      this.renderResults(results);
    },

    filterModels: function(e) {
      var make = $(e.target).val();
      if(make !== 'All') {
        this.filteredCars = this.allCars.filter(function(car) {
          return car.make === make;
        });
      } else {
        this.filteredCars = this.allCars;
      }

      $('select[name=model]').empty().append(new Option('All'));

      this.appendOptions('model');
    },

    bindEvents: function(){
      $('form').on('submit', this.filterListings.bind(this));
      $('select[name=make]').on('change', this.filterModels.bind(this));
    },

    init: function(){
      this.$listings = $('#listings');
      this.filteredCars = this.allCars;
      this.renderListings();
      this.populateSelects();
      this.bindEvents();
    },
  };

  App.init();
});