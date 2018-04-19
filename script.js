$(document).ready(function() {
//adding the item, tbc.
$('#add-button').on("click", addItem);
$('ul').on("click", "a", completeItem);
$('ul').on("click", '.fa-trash-alt',deleteItem);
  // event.preventDefault();
// add item
function addItem(){
  var inputValue = $('#item-input').val();
  //prevent adding item if input value is < 0 char.
  if(inputValue.length === 0){
    alert("You did not put any task");
  }
  else {
  $('.my-list').append('<li>' + '<span>' + inputValue + '</span>' +' <a href="#" class="complete">[done]</a>' + ' <i class="far fa-trash-alt complete"></i>' + '</li>');
  $('#item-input').val('');
  }
}

// complete item - to "undone" it I need to toggleClass
function completeItem(){
  //adding class on span element and icon, when a is clicked, how to make it only span?
  $(this).siblings('span').toggleClass('done');
}

// delete item
function deleteItem(){
   $(this).parent().remove();
   //display info right before the last item is removed
   if ($('ul li').length === 0){
     alert(" YAY!!! you'r almost done!");
   }
  }

//add item with Enter key //src StackOverflow
$('#item-input').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $('#add-button').click();
    return false;
  }
});










});
