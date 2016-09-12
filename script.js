
//variables! yay!
//var size = prompt("How many squares?");


$(document).ready(function() {
  var size = 16;
  var square_size = $("#wrapper").width() / size - 2;
  for (var i = 0; i < size; i++) {
    $('#wrapper').append('<div class="row" />');
  };
  for (var i = 0; i < size; i++) {
    $('.row').append('<div class="square" />');
  };
  $('.square').css('width', square_size);
  $('.square').css('height', square_size);
standardColor();
});

// -- Buttons -- //
///standard button
function standard() {
  clear();
  generate();
  standardColor();
};

///randomized button
function random() {
  clear();
  generate();
  randomColor();
};

///trail button
function trail() {
  clear();
  generate();
  $('.square').css('background-color', '#000000');
  trailingColor();
};


// -- functions -- //
///clear function
function clear() {
    $('.square').remove();
    $('.row').remove();
};

///reset function
function reset() {
    $('.square').css("background-color", "#FFFFFF");
}

//grid generator function
function generate() {
  var size = prompt("How many squares?");
  var square_size = $("#wrapper").width() / size - 2;
  for (var i = 0; i < size; i++) {
    $('#wrapper').append('<div class="row" />');
  };
  for (var i = 0; i < size; i++) {
    $('.row').append('<div class="square" />');
  };
  $('.square').css('width', square_size);
  $('.square').css('height', square_size);
};

// -- color versions -- //
///standard
function standardColor() {
  $('.square').hover(function() {
      $(this).addClass('highlight');
  });
};
///randomized
function randomColor() {
  $('.square').mouseenter(function() {
      $(this).css('background-color', randomGenerator());
  });
};

////random code generator
function randomGenerator() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

///trailing color
function trailingColor() {
    $('.square').hover(function () {
        $(this).css('opacity', 0);
      }, function () {
        $(this).fadeTo('fast', 1);
    });
};
