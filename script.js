var answers = [
  { answer: "It is certain", value: "positive" },
  { answer: "It is decidedly so", value: "positive" },
  { answer: "Without a doubt", value: "positive" },
  { answer: "Yes definitely", value: "positive" },
  { answer: "You may rely on it", value: "positive" },
  { answer: "As I see it, yes", value: "positive" },
  { answer: "Most likely", value: "positive" },
  { answer: "Outlook good", value: "positive" },
  { answer: "Yes", value: "positive" },
  { answer: "Signs point to yes", value: "positive" },
  { answer: "Reply hazy try again", value: "neutral" },
  { answer: "Ask again later", value: "neutral" },
  { answer: "Better not tell you now", value: "neutral" },
  { answer: "Cannot predict now", value: "neutral" },
  { answer: "Concentrate and ask again", value: "neutral" },
  { answer: "Don't count on it", value: "negative" },
  { answer: "My reply is no", value: "negative" },
  { answer: "My sources say no", value: "negative" },
  { answer: "Outlook not so good", value: "negative" },
  { answer: "Very doubtful", value: "negative" }
];

// first action is the save button. this is hit after the question has been inputted

  $("#save-button").on('click', function(e) {
    e.preventDefault();
    var question = $('#input-field').val();

    $('.question').text(question);

  var index = Math.floor(Math.random() * answers.length);

  $('.answer').text(answers[index].answer)
  .removeClass("negative neutral posative")
  .addClass(answers[index].value)

  $('#input-field').val('');

    console.log(answers[index]);    //sanity check! was used in the earlier in the code before the question was printing 
  });

// .val fetched the data from the input field
// var index 
// line 32 generates a random number to pick and answer form the array of
//line 43 fetches fetched the answer field from the DOM and replaces it with our randomly generated answer
//the answer is now either posative, negative or nuteral
//line 35 removes all the CSS classes so the correct one can be selected. if this is not done then they will
//all be red - as this is the forst CSS colour statement for the answers so it simply runs.
//line 36 selects the CSS colours for the answers
// line 38 clears the input field - question box - by passing an emply field through it.


