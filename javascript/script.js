
let zodiac; //States what zodiac the user has chosen

let myDate; //Collects user date
let zodiacMonth; //collects the month
let zodiacDay; //collects the day

//HTML Elements
let image = document.getElementById('display'); //Changes the image.
let subtitle = document.getElementById('description'); //Changes the title of the zodiac
let displayDate = document.getElementById('dateRange'); //changes the date range displayed underneath symbol name
let info = document.getElementById('info'); // Changes the paragraph about the zodiac

//reads button clicks
let coffee = document.getElementById('coffee');
let orange = document.getElementById('orange');
let milk = document.getElementById('milk');
let strawberry = document.getElementById('straw');
let apple = document.getElementById('apple');
let cereal = document.getElementById('cereal');
let pancake = document.getElementById('pancake');
let toast = document.getElementById('toast');
let bagel = document.getElementById('bagel');
let donut = document.getElementById('donut');
let muffin = document.getElementById('muffin');
let yolk = document.getElementById('yolk');

//reads the sound files
const coffeeSound = document.getElementById('coffeeMP3');
const orangeSound = document.getElementById('orangeMP3');
const milkSound = document.getElementById('milkMP3');
const strawberrySound = document.getElementById('strawberryMP3');
const appleSound = document.getElementById('appleMP3');
const cerealSound = document.getElementById('cerealMP3');
const pancakeSound = document.getElementById('pancakeMP3');
const toastSound = document.getElementById('toastMP3');
const bagelSound = document.getElementById('bagelMP3');
const donutSound = document.getElementById('donutMP3');
const muffinSound = document.getElementById('muffinMP3');
const yolkSound = document.getElementById('yolkMP3');

function noSoundPlease(){ //This function prevents audio from over lapping each other. Everytime a zodiac is activated, this function will run first, and then it will play the audio assocaited with that zodiac.

coffeeSound.pause();
coffeeSound.currentTime=0;

orangeSound.pause();
orangeSound.currentTime=0;

milkSound.pause();
milkSound.currentTime=0;

strawberrySound.pause();
strawberrySound.currentTime=0;

appleSound.pause();
appleSound.currentTime=0;

cerealSound.pause();
cerealSound.currentTime=0;

pancakeSound.pause();
pancakeSound.currentTime=0;

toastSound.pause();
toastSound.currentTime=0;

bagelSound.pause();
bagelSound.currentTime=0;

donutSound.pause();
donutSound.currentTime=0;

muffinSound.pause();
muffinSound.currentTime=0;

yolkSound.pause();
yolkSound.currentTime=0;
}

function showHelp(){ //This functions is responsible for hiding and unhiding the help box.
  const help = document.getElementById('helpinfo');
  if (help.style.display === 'none'){
      help.style.display = 'block';
  } else {
      help.style.display = 'none';
  }
}

//uses submitted date information, and converts it into something the algorithm can use.
function getDate(){ 
    myDate = new Date (document.getElementById('zodiac-form').value);
    zodiacDay = myDate.getDate() + 1;
    zodiacMonth = myDate.getMonth() + 1;
    getZodiac(zodiacDay, zodiacMonth)
}

//The algorithm used to determine the zodiac. it reads the function getZodiac, and uses the values to determine the correct zodiac.
function getZodiac (zodiacDay, zodiacMonth){
if ((zodiacMonth == 12 && zodiacDay >= 22) || (zodiacMonth == 1 && zodiacDay <= 19)) {
    changeZodiac('yolk');
  } else if ((zodiacMonth == 11 && zodiacDay >= 22) || (zodiacMonth == 12 && zodiacDay <= 21)) {
    changeZodiac('muffin');
  } else if ((zodiacMonth == 10 && zodiacDay >= 24) || (zodiacMonth == 11 && zodiacDay <= 21)) {
    changeZodiac('donut');
  } else if ((zodiacMonth == 9 && zodiacDay >= 23) || (zodiacMonth == 10 && zodiacDay <= 23)) {
    changeZodiac('bagel');
  } else if ((zodiacMonth == 8 && zodiacDay >= 23) || (zodiacMonth == 9 && zodiacDay <= 22)) {
    changeZodiac('toast');
  } else if ((zodiacMonth == 7 && zodiacDay >= 23) || (zodiacMonth == 8 && zodiacDay <= 22)) {
    changeZodiac('pancake');
  } else if ((zodiacMonth == 6 && zodiacDay >= 22) || (zodiacMonth == 7 && zodiacDay <= 22)) {
    changeZodiac('cereal');
  } else if ((zodiacMonth == 5 && zodiacDay >= 21) || (zodiacMonth == 6 && zodiacDay <= 21)) {
    changeZodiac('apple');
  } else if ((zodiacMonth == 4 && zodiacDay >= 20) || (zodiacMonth == 5 && zodiacDay <= 20)) {
    changeZodiac('strawberry');
  } else if ((zodiacMonth == 3 && zodiacDay >= 21) || (zodiacMonth == 4 && zodiacDay <= 19)) {
    changeZodiac('milk');
  } else if ((zodiacMonth == 2 && zodiacDay >= 19) || (zodiacMonth == 3 && zodiacDay <= 20)) {
    changeZodiac ('orange');
  } else if ((zodiacMonth == 1 && zodiacDay >= 20) || (zodiacMonth == 2 && zodiacDay <= 18)) {
    changeZodiac ('coffee');
  }
}

//These event listeners are for manually pressing the buttons associated with each zodiac.

coffee.addEventListener('click', function(){
    changeZodiac('coffee');
});

orange.addEventListener('click', function(){
  changeZodiac('orange');
});

milk.addEventListener('click', function(){
  changeZodiac('milk');
});

strawberry.addEventListener('click', function(){
  changeZodiac('strawberry');
});

apple.addEventListener('click', function(){
  changeZodiac('apple');
});

cereal.addEventListener('click', function(){
  changeZodiac('cereal');
});

pancake.addEventListener('click', function(){
  changeZodiac('pancake');
});

toast.addEventListener('click', function(){
  changeZodiac('toast');
});

bagel.addEventListener('click', function(){
  changeZodiac('bagel');
});

donut.addEventListener('click', function(){
  changeZodiac('donut');
});

muffin.addEventListener('click', function(){
  changeZodiac('muffin');
});

yolk.addEventListener('click', function(){
  changeZodiac('yolk');
});

 
//The most important function here. Both the algorithm and the event listeners run this function depending on the value they feed it. Each one displays the image, the text, and the sound associated with eahc zodiac. 

function changeZodiac(zodiac){
  
  if (zodiac === 'coffee'){
    image.src = '../images/coffee.png'
    subtitle.innerHTML = 'Season of the Coffee';
    displayDate.innerHTML = 'January 20th - February 18th';
    info.innerHTML = 'A warm beverage that wakes you up. Coffee symbolizes energy, a trait common among hardworking achievers. It fills you up with vim and vigor, allowing you to accomplish great things at a rapid pace. Don’t drink too much though, otherwise you’ll end up with the jitters!';
    noSoundPlease();
    coffeeSound.play();
  }  
  
  if (zodiac === 'orange'){
    image.src = '../images/orange-juice.png';
    subtitle.innerHTML = 'Season of the Orange Juice';
    displayDate.innerHTML = 'February 19th - March 20th';
    info.innerHTML = 'A cool drink that keeps you strong and healthy. Orange Juice symbolizes bravery, a trait common among the most courageous of leaders. It helps keep your body fit and gives you the strength you need in order to take on any challenge. It also pairs well with any breakfast food!';
    noSoundPlease();
    orangeSound.play();
  }  
 
  if (zodiac === 'milk'){
    image.src = '../images/milk.png';
    subtitle.innerHTML = 'Season of the Milk';
    displayDate.innerHTML = 'March 21st - April 19th';
    info.innerHTML = 'A smooth drink that calms your nerves. Milk symbolizes tranquility, a trait common among the serene and harmonious. It has a creamy taste that soothes the soul, allowing you to clear your mind and relax for a while. When heated, Milk could also be used to help you sleep at night.';
    noSoundPlease();
    milkSound.play();
  } 
 
  if (zodiac === 'strawberry'){
    image.src = '../images/strawberry.png';
    subtitle.innerHTML = 'Season of the Strawberry';
    displayDate.innerHTML = 'April 20th - May 20th';
    info.innerHTML = 'A popular fruit that pairs well with other foods. Strawberries symbolize charisma, the trait of socialization. Their signature red color helps them stick out in the crowd, and their unique flavor is a welcome presence in any meal, whether it’s being mixed in a smoothie, or dolloped in whipped cream for a sweet treat!';
    noSoundPlease();
    strawberrySound.play();
  }
  
  if (zodiac === 'apple'){
    image.src = '../images/apple-pie.png';
    subtitle.innerHTML = 'Season of the Apple Pie';
    displayDate.innerHTML = 'May 21st - June 21st';
    info.innerHTML = 'A warm dessert that’s filled with sweet apples and surrounded by a flakey crust. Apple Pie symbolizes mysteries and secrets. The sweet interior of the pie is hidden away by its exterior, preventing anyone from knowing what’s really inside. Who knows what actually lies beneath the surface? For all we know, it might not even have apples in there! ';
    noSoundPlease();
    appleSound.play();
  }
  
  if (zodiac === 'cereal'){
    image.src = '../images/cereal.png';
    subtitle.innerHTML = 'Season of the Cereal';
    displayDate.innerHTML = 'June 22nd - July 22nd';
    info.innerHTML = 'A quickly made meal, usually served in milk. Cereal symbolizes reliability and dependability. When plans don’t quite work out, this meal is always there for you, ready to be made at a moment’s notice. By aligning with this sign, you will find yourself greatly valued by others, and you will form many loyal friendships.';
    noSoundPlease();
    cerealSound.play();
  }
  
  if (zodiac === 'pancake'){
    image.src = '../images/pancakes.png';
    subtitle.innerHTML = 'Season of the Pancake';
    displayDate.innerHTML = 'July 23nd - August 22nd';
    info.innerHTML = 'A stack of flapjacks coated in butter and maple syrup. Pancakes symbolize balance, a trait valued by those who seek the most well-rounded lifestyles. While problems may keep mounting on top of each other, your ability to strategize and think clearly will prevent everything from falling apart.';
    noSoundPlease();
    pancakeSound.play();
  }
  
  if (zodiac === 'toast'){
    image.src = '../images/toast.png';
    subtitle.innerHTML = 'Season of the Toast';
    displayDate.innerHTML = 'August 23rd - September 22nd';
    info.innerHTML = 'A piece of bread that’s been toasted. Toast symbolizes identity, and the confidence to know oneself. Despite it appearing in many forms, and whether it’s topped with butter, jam, eggs, at the end of the day it’s still knows that it’s toast. People aligned with this sign tend to have a deep understanding how who they are and are willing to accept changes in life instead of running away from them.';
    noSoundPlease();
    toastSound.play();
  }
  
  if (zodiac === 'bagel'){
    image.src = '../images/bagel.png';
    subtitle.innerHTML = 'Season of the Bagel';
    displayDate.innerHTML = 'September 23rd - October 23rd';
    info.innerHTML = 'A form of bread in the shape of a ring. Bagels represent order and structure. You value having control in your life and are always ready to form a plan of action before doing anything. While you may seem boring at first, your ability to collaborate and work well with others allows you to enhance anyone’s talents.';
    noSoundPlease();
    bagelSound.play();
  }
  
  if (zodiac === 'donut'){
    image.src = '../images/donut.png';
    subtitle.innerHTML = 'Season of the Donut';
    displayDate.innerHTML = 'October 24th - November 21st';
    info.innerHTML = 'A small, cake-like dessert in the shape of a ring. Donuts symbolize creativity and fun. You value having new experiences and more variety in the things you do, and you tend reject normalcy in favor of a more chaotic lifestyle. Your always on the lookout for the next big thing, and you’re usually the first to embrace innovation. Donuts also go great with coffee.';
    noSoundPlease();
    donutSound.play();
  }
  
  if (zodiac === 'muffin'){
    image.src = '../images/muffin.png';
    subtitle.innerHTML = 'Season of the Muffin';
    displayDate.innerHTML = 'November 22nd - December 21st';
    info.innerHTML = 'A tiny cake that’s baked in an oven. Muffins symbolize knowledge and growth, a trait common among the wise. You are greatly shaped by your experiences, and you have a deeper understanding of the world around you. Just remember to take your time, because otherwise you’ll end up with an underbaked view on the things in your life.';
    noSoundPlease();
    muffinSound.play();
  }
  
  if (zodiac === 'yolk'){
    image.src = '../images/yolk.png';
    subtitle.innerHTML = 'Season of the Yolk';
    displayDate.innerHTML = 'December 22nd - January 19th';
    info.innerHTML = 'The yellow interior of an egg. The Yolk symbolizes life and new beginnings. You tend to take personal action and pave your way towards the future instead of passively accepting the things around you. You have a deep understanding of what you can control in life, and you do anything it takes to achieve your goals.';
    noSoundPlease();
    yolkSound.play();
  }
}
