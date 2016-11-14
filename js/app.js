var Ingredients = function(options) {
  this.options = options;
};

var strong = new Ingredients(['Glug of rum', 'slug of whisky', 'splash of gin']);
var salty = new Ingredients(['Olive on a stick', 'salt-dusted rim', 'rasher of bacon']);

var Pantry = function(stock) {
  this.stock = stock;
};

var newPantry = new Pantry(['water', 'ginger ale', 'juice']);

// var Questions = function(type) {
//   this.type = type;
// }
//
// var strongQuestion = new Questions('Do ye like yer drinks strong?');
// var saltyQuestion = new Questions('Do ye like it with a salty tang?');
//
// var questionsArray = [strongQuestion.type, saltyQuestion.type];

$(function() {
  var includedItems = [];

  $('.strong-yes').click(function() {
    console.log("HEY");
    var randomIndex = Math.floor(Math.random() * (3 - 1 + (1)));
    includedItems.push(strong.options[randomIndex]);
    console.log(includedItems);

    makeDrink();

  });

  var makeDrink = function() {
    for (i = 0; i < includedItems.length; i++) {
      $('.drink-type').append(includedItems[i]);
    }

  }
});
