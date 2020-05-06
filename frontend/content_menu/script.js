
$(function(){
  var App = {
    todoItems: [
      { id: 1, title: 'Homework' },
      { id: 2, title: 'Shopping' },
      { id: 3, title: 'Calling Mom' },
      { id: 4, title: 'Coffee with John '}
    ],

    cacheElements: function() {
      this.$main = $('main');
      this.$list = $('#todos');
      this.$overlay = $('#overlay');
      this.$dialog = $('#dialog');
      this.$menu = $('#context-menu');
      this.focusItemId = -1;
    },

    bindEvents: function() {
      this.$list.on('contextmenu', 'li', this.displayMenu.bind(this));
      this.$main.on('click', this.hideMenus.bind(this));
      this.$menu.on('click', 'li', this.todoAction.bind(this));
      $('a[data-action=cancel').on('click', this.hideMenus.bind(this));
      $('a[data-action=confirm').on('click', this.removeTodo.bind(this));
    },

    removeTodo: function() {
      this.deleteTodo();
      var liSelector = 'li[data-id=' + this.focusItemId + ']';
      $(liSelector).remove();
      this.$main.trigger('click');
    },

    deleteTodo: function() {
      if(this.focusItemId === -1) { return; }
      this.todoItems = this.todoItems.filter(function(todo) {
        return todo.id !== this.focusItemId;
      });
    },

    todoAction: function(e) {
      e.preventDefault();
      e.stopPropagation();
      if($(e.target).attr('data-id') === 'remove') {
        this.confirmRemove();
      }
    },

    confirmRemove: function(){
      this.$overlay.show();
      this.$dialog.css({display: 'flex'});
    },

    hideMenus: function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$menu.stop(true);
      this.$menu.removeAttr('style');
      this.focusItemId = -1;
      this.$overlay.hide();
      this.$dialog.hide();
    },

    getDataId: function(el) {
      return Number($(el).attr('data-id'));
    },

    displayMenu: function(e) {
      e.preventDefault();
      this.focusItemId = this.getDataId(e.target);
      this.showMenuAt({ top: e.pageY, left: e.pageX });
    },

    setMenuPosition: function(coord) {
      this.$menu.css({ top: coord.top + 'px', left: coord.left + 'px' });
    },

    showMenuAt: function(coord) {
      this.$menu.fadeOut(80);
      setTimeout(function(){
        this.setMenuPosition(coord);
        this.$menu.fadeIn(200);
      }.bind(this), 80);
    },

    generateHTML: function(el) {
      var context = {items: this.todoItems};
      var template = Handlebars.compile(el.html());
      return template(context);
    },

    renderList: function() {
      var html = this.generateHTML($('#items'));
      this.$list.append(html);
    },

    init: function() {
      this.cacheElements();
      this.renderList();
      this.bindEvents();
    },
  };

  App.init();
});


