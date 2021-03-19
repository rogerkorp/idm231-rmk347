
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
let coffee = document.getElementById("coffee");
let orange = document.getElementById("orange");
let milk = document.getElementById("milk");
let strawberry = document.getElementById("straw");
let apple = document.getElementById("apple");
let cereal = document.getElementById("cereal");
let pancake = document.getElementById("pancake");
let toast = document.getElementById("toast");
let bagel = document.getElementById("bagel");
let donut = document.getElementById("donut");
let muffin = document.getElementById("muffin");
let yolk = document.getElementById("yolk");

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
    myDate = new Date (document.getElementById("zodiac-form").value);
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
    image.src = "../images/coffee.png"
    subtitle.innerHTML = "Season of the Coffee";
    displayDate.innerHTML = "January 20th - February 18th";
    info.innerHTML = "A warm beverage that wakes you up. Coffee symbolizes energy, a trait common among hardworking achievers. It fills you up with vim and vigor, allowing you to accomplish great things at a rapid pace. Don’t drink too much though, otherwise you’ll end up with the jitters!";
    noSoundPlease();
    coffeeSound.play();
  }  
  
  if (zodiac === 'orange'){
    image.src = "../images/orange-juice.png";
    subtitle.innerHTML = "Season of the Orange Juice";
    displayDate.innerHTML = "February 19th - March 20th";
    info.innerHTML = "A cool drink that keeps you strong and healthy. Orange Juice symbolizes bravery, a trait common among the most courageous of leaders. It helps keep your body fit and gives you the strength you need in order to take on any challenge. It also pairs well with any breakfast food!";
    noSoundPlease();
    orangeSound.play();
  }  
 
  if (zodiac === 'milk'){
    image.src = "../images/milk.png";
    subtitle.innerHTML = "Season of the Milk";
    displayDate.innerHTML = "March 21st - April 19th";
    info.innerHTML = "A smooth drink that calms your nerves. Milk symbolizes tranquility, a trait common among the serene and harmonious. It has a creamy taste that soothes the soul, allowing you to clear your mind and relax for a while. When heated, Milk could also be used to help you sleep at night.";
    noSoundPlease();
    milkSound.play();
  } 
 
  if (zodiac === 'strawberry'){
    image.src = "../images/strawberry.png";
    subtitle.innerHTML = "Season of the Strawberry";
    displayDate.innerHTML = "April 20th - May 20th";
    info.innerHTML = "A popular fruit that pairs well with other foods. Strawberries symbolize charisma, the trait of socialization. Their signature red color helps them stick out in the crowd, and their unique flavor is a welcome presence in any meal, whether it’s being mixed in a smoothie, or dolloped in whipped cream for a sweet treat!";
    noSoundPlease();
    strawberrySound.play();
  }
  
  if (zodiac === 'apple'){
    image.src = "../images/apple-pie.png";
    subtitle.innerHTML = "Season of the Apple Pie";
    displayDate.innerHTML = "May 21st - June 21st";
    info.innerHTML = "A warm dessert that’s filled with sweet apples and surrounded by a flakey crust. Apple Pie symbolizes mysteries and secrets. The sweet interior of the pie is hidden away by its exterior, preventing anyone from knowing what’s really inside. Who knows what actually lies beneath the surface? For all we know, it might not even have apples in there! ";
    noSoundPlease();
    appleSound.play();
  }
  
  if (zodiac === 'cereal'){
    image.src = "../images/cereal.png";
    subtitle.innerHTML = "Season of the Cereal";
    displayDate.innerHTML = "June 22nd - July 22nd";
    info.innerHTML = "A quickly made meal, usually served in milk. Cereal symbolizes acceptance, a trait common among the most understanding of people. When plans don’t quite work out, this meal is always there for you, ready to be made at a moments notice. While it may not be as lavish as you’d hope, it ends up being your only option, and sometimes you just have to accept that instead of letting it weigh you down.";
    noSoundPlease();
    cerealSound.play();
  }
  
  if (zodiac === 'pancake'){
    image.src = "../images/pancakes.png";
    subtitle.innerHTML = "Season of the Pancake";
    displayDate.innerHTML = "July 23nd - August 22nd";
    info.innerHTML = "A stack of flapjacks coated in butter and drenched in maple syrup. Pancakes symbolize order, the trait of calculated strategists. While initially made of a formless batter, pancakes bake into round disks that can then be built on top of each other, thereby forming towering meals. By taking the chaos and applying rules and structure to it you are capable of accomplishing great things.";
    noSoundPlease();
    pancakeSound.play();
  }
  
  if (zodiac === 'toast'){
    image.src = "../images/toast.png";
    subtitle.innerHTML = "Season of the Toast";
    displayDate.innerHTML = "August 23rd - September 22nd";
    info.innerHTML = "A piece of bread that’s been toasted. Toast symbolizes confidence, a trait common among those with the greatest sense of self. Its presence is immediately known through the pop of a toaster, and whether it’s topped with butter, jam, eggs, or any other food, at the end of the day it’s still just toast.";
    noSoundPlease();
    toastSound.play();
  }
  
  if (zodiac === 'bagel'){
    image.src = "../images/bagel.png";
    subtitle.innerHTML = "Season of the Bagel";
    displayDate.innerHTML = "September 23rd - October 23rd";
    info.innerHTML = "A form of bread in the shape of a ring. Bagels symbolize well-roundedness, a trait common among those with the most balanced lifestyles. While a bagel is missing its center piece, it still has everything else aside from that, making it more a fulfilling meal than that one piece alone could provide. By trying out many things and learning many skills, you could end up living a far more enriching life than if you had focused on only one.";
    noSoundPlease();
    bagelSound.play();
  }
  
  if (zodiac === 'donut'){
    image.src = "../images/donut.png";
    subtitle.innerHTML = "Season of the Donut";
    displayDate.innerHTML = "October 24th - November 21st";
    info.innerHTML = "A small, cake-like dessert in the shape of a ring. Donuts symbolize fun, a trait common among the creative and the wild. They can come in many different forms, varying in color, flavor, frosting, and even sprinkles. This allows them to have a near infinite number of combinations, and while they may not necessarily be the best thing to have in the morning, they always make for an enjoyable treat. ";
    noSoundPlease();
    donutSound.play();
  }
  
  if (zodiac === 'muffin'){
    image.src = "../images/muffin.png";
    subtitle.innerHTML = "Season of the Muffin";
    info.innerHTML = "A tiny cake that’s baked in an oven. Muffins symbolize wisdom. Similar to how our experiences in the world shape us over time, the muffin starts off small but as it incubates in the oven it will eventually develop into something that’s far more enriching than before. They also taste really good with coffee.";
    noSoundPlease();
    muffinSound.play();
  }
  
  if (zodiac === 'yolk'){
    image.src = "../images/yolk.png";
    subtitle.innerHTML = "Season of the Yolk";
    info.innerHTML = "The interior of an egg. The Yolk symbolizes life, the trait of those who embrace new beginnings. While we cannot change the past, we can always embrace the future and create something new. The Yolk tells us that the future is never certain, and that what it ends up becoming is all up for you to decide.";
    noSoundPlease();
    yolkSound.play();
  }
}
