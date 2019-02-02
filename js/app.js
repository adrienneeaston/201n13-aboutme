
'use strict';

var counter = 0;

var born = prompt('Pop quiz about me! Was I born in Michigan? Yes or No?');
console.log('User answered ' + born +', "for the question "Was I born in Michigan"');
born.toLowerCase();

if (born === 'yes') {
  alert('No, actually I\'ve never even been there!');
} else {
  counter++;
  alert('Correct! I was born in Yorba Linda, California.');
}

var work = prompt('Was my first job working at Disneyland? Yes or No?');
console.log('User answered ' + work +', "Was my first job working at Disneyland?"');
born.toLowerCase();

if (work === 'yes') {
  counter++;
  alert('That is right! I served frozen yogurt, baked goods, and bad coffee on Main Street!');
} else {
  alert('But is was! I served frozen yogurt, baked goods, and bad coffee on Main Street!');
}

var pets = prompt('Do I have cat? Yes or No?');
console.log('User answered ' + pets +', "Do I have a cat?"');
born.toLowerCase();

if (pets === 'yes') {
  counter++;
  alert('Yes, you are right! and she is super fluffy!');
} else {
  alert('Wrong! I do have a cat and she is the fluffiest!');
}

var music = prompt('Is Pearl Jam my favorite band? Yes or No?');
console.log('User answered ' + music +', "Is Pearl Jam my favorite band?"');
born.toLowerCase();

if (music === 'yes') {
  alert('No way! Oingo Boingo forever!');
} else {
  counter++;
  alert('You are correct! It is Oingo Boingo that will forever have my heart.');
}

var candy = prompt('Is Turkish Delight my favorite candy? Yes or No?');
console.log('User answered ' + candy +', "Is turkish Delight my favorite candy?"');
born.toLowerCase();

if (candy === 'yes') {
  counter++;
  alert('You know me so well! I would follow the White Witch anywhere for rose flavored Turkish Delight.');
} else {
  alert('I thought you knew me! You can make it up to me by buying me some. Rose flavored.');
}


// This is my 6th question using for loop programming to ask the user 4 times before ending the question.

for (var i = 1; i < 5; i++) {

  var number = prompt('How many McDonald\'s hamburgers have I eaten in my life?');
  console.log('User believes I had ' + number + ' "McDonald\'s hamburgers in my life"');

  // This will ensure that even if the user inputs a negative number, it will not say "too high!".

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

for (var u = 0; u < 6; u++){

  var televisionShows = [
    'the good place',
    'game of thrones',
    'steven universe'
  ];

  var userTvAnswer = prompt('What is one of my favorite current tv shows?');
  userTvAnswer.toLowerCase();
  if(televisionShows.includes(userTvAnswer)){
    counter++;
    alert('yay you got it right. My current favorites are, ' + televisionShows[0] + ', ' + televisionShows[1] + ', ' + televisionShows[2]);
    console.log('User answered ' + userTvAnswer + ', to the question "What is one of my favorited current tv shows?"');
    break;
  }
  else {
    alert('Nope!');
    console.log('User answered ' + userTvAnswer + ', to the question "What is one of my favorited current tv shows?"');
  }
}

alert('Congratulations!! You got ' + counter + '/7 correct!');





