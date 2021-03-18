
let zodiac; //States what zodiac the user has chosen

let myDate; //Collects user date
let zodiacMonth; //collects the month
let zodiacDay; //collects the day


let image = document.getElementById("display") //Changes the image data.

let subtitle = document.getElementById('description')

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
    zodiac = 'yolk';
    image.src = "../images/yolk.png";
    subtitle.innerHTML = "Season of the Yolk";
  } else if ((zodiacMonth == 11 && zodiacDay >= 22) || (zodiacMonth == 12 && zodiacDay <= 21)) {
    zodiac = 'muffin';
    image.src = "../images/muffin.png";
    subtitle.innerHTML = "Season of the Muffin";
  } else if ((zodiacMonth == 10 && zodiacDay >= 24) || (zodiacMonth == 11 && zodiacDay <= 21)) {
    zodiac = 'donut';
    image.src = "../images/donut.png";
    subtitle.innerHTML = "Season of the Donut";
  } else if ((zodiacMonth == 9 && zodiacDay >= 23) || (zodiacMonth == 10 && zodiacDay <= 23)) {
    zodiac = 'bagel';
    image.src = "../images/bagel.png";
    subtitle.innerHTML = "Season of the Bagel";
  } else if ((zodiacMonth == 8 && zodiacDay >= 23) || (zodiacMonth == 9 && zodiacDay <= 22)) {
    zodiac = 'toast';
    image.src = "../images/toast.png";
    subtitle.innerHTML = "Season of the Toast";
  } else if ((zodiacMonth == 7 && zodiacDay >= 23) || (zodiacMonth == 8 && zodiacDay <= 22)) {
    zodiac = 'pancake';
    image.src = "../images/pancakes.png";
    subtitle.innerHTML = "Season of the Pancake";
  } else if ((zodiacMonth == 6 && zodiacDay >= 22) || (zodiacMonth == 7 && zodiacDay <= 22)) {
    zodiac = 'cereal';
    image.src = "../images/cereal.png";
    subtitle.innerHTML = "Season of the Cereal";
  } else if ((zodiacMonth == 5 && zodiacDay >= 21) || (zodiacMonth == 6 && zodiacDay <= 21)) {
    zodiac = 'apple';
    image.src = "../images/apple-pie.png";
    subtitle.innerHTML = "Season of the Apple Pie";
  } else if ((zodiacMonth == 4 && zodiacDay >= 20) || (zodiacMonth == 5 && zodiacDay <= 20)) {
    zodiac = 'strawberry';
    image.src = "../images/strawberry.png";
    subtitle.innerHTML = "Season of the Strawberry";
  } else if ((zodiacMonth == 3 && zodiacDay >= 21) || (zodiacMonth == 4 && zodiacDay <= 19)) {
    zodiac = 'milk';
    image.src = "../images/milk.png";
    subtitle.innerHTML = "Season of the Milk";
  } else if ((zodiacMonth == 2 && zodiacDay >= 19) || (zodiacMonth == 3 && zodiacDay <= 20)) {
    zodiac = 'orange';
    image.src = "../images/orange-juice.png";
    subtitle.innerHTML = "Season of the Orange Juice";
  } else if ((zodiacMonth == 1 && zodiacDay >= 20) || (zodiacMonth == 2 && zodiacDay <= 18)) {
    zodiac = 'coffee';
    image.src = "../images/coffee.png"
    subtitle.innerHTML = "Season of the Coffee";
  }
}
 
//Event listeners are used to denote specific use cases in zodiac.

coffee.addEventListener('click', function(){
    console.log('user clicked on coffee');
    zodiac = 'coffee';
    image.src = "../images/coffee.png";
    subtitle.innerHTML = "Season of the Coffee";
});

orange.addEventListener('click', function(){
    console.log('user clicked on orange');
    zodiac = 'orange';
    image.src = "../images/orange-juice.png";
    subtitle.innerHTML = "Season of the Orange Juice";
});

milk.addEventListener('click', function(){
    console.log('user clicked on milk');
    zodiac = 'milk';
    image.src = "../images/milk.png";
    subtitle.innerHTML = "Season of the Milk";
});

strawberry.addEventListener('click', function(){
    console.log('user clicked on strawberry');
    zodiac = 'strawberry';
    image.src = "../images/strawberry.png";
    subtitle.innerHTML = "Season of the Strawberry";
});

apple.addEventListener('click', function(){
    console.log('user clicked on apple pie');
    zodiac = 'apple';
    image.src = "../images/apple-pie.png";
    subtitle.innerHTML = "Season of the Apple Pie";
});

cereal.addEventListener('click', function(){
    console.log('user clicked on cereal');
    zodiac = 'cereal';
    image.src = "../images/cereal.png";
    subtitle.innerHTML = "Season of the Cereal";
});

pancake.addEventListener('click', function(){
    console.log('user clicked on pancake');
    zodiac = 'pancake';
    image.src = "../images/pancakes.png";
    subtitle.innerHTML = "Season of the Pancake";
});

toast.addEventListener('click', function(){
    console.log('user clicked on toast');
    zodiac = 'toast';
    image.src = "../images/toast.png";
    subtitle.innerHTML = "Season of the Toast";
});

bagel.addEventListener('click', function(){
    console.log('user clicked on bagel');
    zodiac = 'bagel';
    image.src = "../images/bagel.png";
    subtitle.innerHTML = "Season of the Bagel";
});

donut.addEventListener('click', function(){
    console.log('user clicked on donut');
    zodiac = 'donut';
    image.src = "../images/donut.png";
    subtitle.innerHTML = "Season of the Donut";
});

muffin.addEventListener('click', function(){
    console.log('user clicked on muffin');
    zodiac = 'muffin';
    image.src = "../images/muffin.png";
    subtitle.innerHTML = "Season of the Muffin";
});

yolk.addEventListener('click', function(){
    console.log('user clicked on yolk');
    zodiac = 'yolk';
    image.src = "../images/yolk.png";
    subtitle.innerHTML = "Season of the Yolk";
});



// const submit = document.getElementById("submit");
// submit.addEventListener('click', function(){
//     console.log(`${zodiac} ${astrological}`);
// });

const help = document.getElementById('help');
help.addEventListener('click', function(){
    console.log(`${myDate}, ${zodiacDay}, ${zodiacMonth}`);
});
