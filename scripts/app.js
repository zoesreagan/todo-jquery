console.log("to do list");

//enter a to do item in the input box, and click the 'add button'
$('#submit').on('click', (event) => {
  const $inputVal = $('#input-box').val();
    console.log($inputVal);

    addToDo($inputVal);
});

// have the item render in the to do list

const addToDo = (toDoText) => {
  //create a div with class of "to-do-item
  const $div = $('<div>').addClass("to-do-item");

  //inside div, create h5 with name of to do;
  const $h5 = $('<h5>').text(toDoText);



  //then create button that says completed
  const $completedButton = $('<button>').text("completed");
  //click on button within the to do item list to move that item over to
  //'completed' column
  $completedButton.on('click', clickHandler)

  // (e) => {
  //   const $currentDiv = $(e.currentTarget).parent().detach();
  //this is selecting the current to do div and detaching from the DOM
  //change the text of the button to delete

  //append to correct spot on the DOM
  $h5.appendTo($div);
  $completedButton.appendTo($div);

  $('#to-do-list').append($div)

};

const clickHandler = (e) => {
//click that same button to remove the to do item from the page
  const $currentDiv = $(e.currentTarget).parent().detach();
  $(e.currentTarget).text('delete');
  $('#completed').append($currentDiv)

//remove event listener & add new 
$(e.currentTarget).off('click').on('click', (e) => {
  $(e.currentTarget).parent().detach();
  })
}

//remove div from the page
