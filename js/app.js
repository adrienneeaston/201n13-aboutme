
'use strict';

var born = prompt('Pop quiz about me! Was I born in Michigan? Yes or No? (capitalization is important when answering...')

console.log(born);

if (born === "Yes") {
    alert("No, actually I've never even been there!");
} else {
    alert('Correct! I was born in Yorba Linda, California.'); 
} 

var work = prompt('Was my first job working at Disneyland? Yes or No?')

console.log(work);

if (work === "Yes") {
    alert('That is right! I served frozen yogurt, baked goods, and bad coffee on Main Street!');
} else {
    alert('But is was! I served frozen yogurt, baked goods, and bad coffee on Main Street!');
}

var pets = prompt('Do I have cat? Yes or No?')

console.log(pets);

if (pets === 'Yes') {
    alert('Yes, you are right! and she is super fluffy!');
} else {
    alert('Wrong! I do have a cat and she is the fluffiest!');
}

var music = prompt('Is Pearl Jam my favorite band? Yes or No?')

console.log(music);

if (music === 'Yes') {
    alert('No way! Oingo Boingo forever!');
} else {
    alert('You are correct! It is Oingo Boingo that will forever have my heart.');
}

var candy = prompt('Is Turkish Delight my favorite candy? Yes or No?')

console.log(candy);

if (candy === 'Yes') {
    alert('You know me so well! I would follow the White Witch anywhere for rose flavored Turkish Delight.');
} else {
    alert('I thought you knew me! And it is rose that is the best flavor! You can make it up to me by buying me some.');
}