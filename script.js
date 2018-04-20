$(document).ready(function() {
//JQUERY plus FUNCTIONS
$("input:text").attr("placeholder", "type new task");
$('#add-button').on("click", addItem);
$('ul').on("click", "a", completeItem);
$('ul').on("click", '.fa-trash-alt',deleteItem);


// ADD ITEM
function addItem(){
  var inputValue = $('#item-input').val();
  //prevent adding item if input value is < 0 char.
  if(inputValue.length === 0){
    alert("You did not put any task");
  }
  else {
  $('.my-list').append('<li>' + ' <a href="#" class="complete"><i class="far fa-check-square"></i></a>' + ' <span>' + inputValue + '</span>' + ' <i class="far fa-trash-alt complete"></i>' + '</li>');
  $('#item-input').val('');
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

// COMPLETE ITEM
function completeItem(){
  //adding class on span element
  $(this).siblings('span').toggleClass('done');
}

// DELETE ITEM
function deleteItem(){
  //once trash icon is clicked, the span text fades out
$(this).siblings('span').fadeOut('1000', function(){
  $(this).parent().remove();
     //display info right before the last item is removed
  if ($('ul li').length === 0){
    alert(" YAY!!! you'r almost done!");
    };
  });
}
});
