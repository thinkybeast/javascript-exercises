function hideDialog() {
  $list.find('.overlay:visible').hide();
  $list.find('.dialog:visible').hide();
}

function removeTodo($item) {
  var id = $item.attr('data-id');
  todo_items = todo_items.filter(function(todo) {
    return todo.id !== +id;
  });
  $item.remove();
}
var todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

var $list = $('ul');
var itemsTemplate = Handlebars.compile($('#items').html());
$list.append(itemsTemplate({items: todo_items}));
hideDialog();

$list.on('click', 'a.remove', function(e) {
  var $li = $(e.target).closest('li');
  $activeOverlay = $li.find('div').show();
});

$list.on('click', '.overlay', hideDialog);

$list.on('click', '.dialog a', function(e) {
  var action = $(this).attr('data-action');
  if(action === 'cancel') {
    hideDialog();
  } else {
    removeTodo($(this).closest('li'));
  }
});