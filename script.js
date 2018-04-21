$(document).ready(function() {
//JQUERY plus FUNCTIONS
$('#add-button').on("click", addItem);
//$('li').on("click", "input", completeItem);
$('li').on("click", 'input', completeItem);
$('ul').on("click", '.fa-trash-alt', deleteItem);
//index for checkbox ids
var index=0;
//to create the
addItem();

// ADD ITEM
function addItem(){
  var inputValue = $('#item-input').val();
  //prevent adding item if input value is < 0 char.
  if(inputValue.length === 0){
    alert("You did not put any task");
  }
  else {
  $('.my-list').append('<li>' + '<a href="#" class="complete"><input type="checkbox" id="to-do-item'+index+'"/><label for ="to-do-item'+index+'">' + inputValue + '</label>' + '</a>' + ' <i class="far fa-trash-alt"></i>' + '</li>');
  $('#item-input').val('');
  $('.my-list li').on("click", '#to-do-item'+index, completeItem);
  $("input:text").attr("placeholder", "type new task");
  ++index;
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
  console.log('completeItem');
  console.log($(this));
  $(this).siblings('label').toggleClass('done');
}

// DELETE ITEM
function deleteItem(){
  //once trash icon is clicked, the span text fades out
  console.log('deleteItem');
  console.log($(this));

  $(this).siblings('a').children('label').fadeOut('1000', function(){
  $(this).parent().parent().remove();
     //display info right before the last item is removed
  if ($('ul li').length === 0){
    alert(" YAY!!! you're almost done!");
    };
  });
}
});
