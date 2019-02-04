
'use strict';

// This program asks the user 7 questions about me and at teh ends provides feedback as to how many they got correct.

var counter = 0;

// Question 1, yes or no question.

function birthState () {
var born = prompt('Pop quiz about me! Was I born in Michigan? Yes or No?');
console.log('User answered ' + born +', "for the question "Was I born in Michigan"');
born = born.toLowerCase();

if (born === 'no') {
  counter++;
  alert('Correct! I was born in Yorba Linda, California.');
} else {
  alert('No, actually I\'ve never even been there!');
}
}

// Question 2, yes or no question.

function firstJob () {
var work = prompt('Was my first job working at Disneyland? Yes or No?');
console.log('User answered ' + work +', "Was my first job working at Disneyland?"');
work = work.toLowerCase();

if (work === 'yes') {
  counter++;
  alert('That is right! I served frozen yogurt, baked goods, and bad coffee on Main Street!');
} else {
  alert('But is was! I served frozen yogurt, baked goods, and bad coffee on Main Street!');
}
}

// Question 3, yes or no question.

function petType () {
var pets = prompt('Do I have cat? Yes or No?');
console.log('User answered ' + pets +', "Do I have a cat?"');
pets = pets.toLowerCase();

if (pets === 'yes') {
  counter++;
  alert('Yes, you are right! and she is super fluffy!');
} else {
  alert('Wrong! I do have a cat and she is the fluffiest!');
}
}

// Question 4, yes or no question.

function favoriteBand () {
var music = prompt('Is Pearl Jam my favorite band? Yes or No?');
console.log('User answered ' + music +', "Is Pearl Jam my favorite band?"');
music = music.toLowerCase();

if (music === 'no') {
  counter++;
  alert('You are correct! It is Oingo Boingo that will forever have my heart.');
} else {
  alert('No way! Oingo Boingo forever!');
}
}

// Question 5, yes or no question.

function favoriteCandy () {
var candy = prompt('Is Turkish Delight my favorite candy? Yes or No?');
console.log('User answered ' + candy +', "Is turkish Delight my favorite candy?"');
candy = candy.toLowerCase();

if (candy === 'yes') {
  counter++;
  alert('You know me so well! I would follow the White Witch anywhere for rose flavored Turkish Delight.');
} else {
  alert('I thought you knew me! You can make it up to me by buying me some. Rose flavored.');
}
}

// Question 6, Asks the user for a number value, gives them 4 chances, loop ends when tehy have gotten it right or answered 4 times.
// Error in this question is that it currently views non-numbers as correct answers. When I tried fixing it by ending in the wrong answer for "else", it broke the code, so I switched it back for now.

function numberBurgers () {
for (var i = 0; i < 4; i++) {

  var number = prompt('How many McDonald\'s hamburgers have I eaten in my life?');
  console.log('User believes I had ' + number + ' "McDonald\'s hamburgers in my life"');

  if (number > 0) {
    alert('Too high!');
  } else if (number < 0) {
    alert('Too low!');
  } else {
  counter++;
  alert('Zero is correct! McDonald\'s hamburgers look gross!');
  break;
  }
}
}

// Question 7, asks for an answer with multiple possible correct answers stored in an array. The loop stops after they have either gotten it right or have tried 6 times.

function favoriteShows () {
for (var u = 0; u < 6; u++){

  var televisionShows = [
    'the good place',
    'game of thrones',
    'steven universe'
  ];

  var userTvAnswer = prompt('What is one of my favorite current tv shows?');
  userTvAnswer = userTvAnswer.toLowerCase();
  if(televisionShows.includes(userTvAnswer)) {
    counter++;
    alert('Good job! You recognize my excellent taste in TV viewing! My current favorites are, ' + televisionShows[0] + ', ' + televisionShows[1] + ', ' + televisionShows[2]);
    console.log('User answered ' + userTvAnswer + ', to the question "What is one of my favorited current tv shows?"');
    break;
  }
  else {
    alert('Nope! Try harder! *whip crack*');
    console.log('User answered ' + userTvAnswer + ', to the question "What is one of my favorited current tv shows?"');
  }
}
}

birthState();
firstJob();
petType();
favoriteBand();
favoriteCandy();
numberBurgers();
favoriteShows();

// Lets the user know how they did.

alert('You got ' + counter + '/7 correct! That\'s how well you know me.');





