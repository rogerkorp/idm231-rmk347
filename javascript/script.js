
let zodiac = null;

let image = document.getElementById("display")

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

let astrological = new Date(document.getElementById("zodiac-date").value);

console.log(`${astrological}`);

coffee.addEventListener('click', function(){
    console.log('user clicked on coffee');
    zodiac = 'coffee';
    image.src = "../images/coffee.png";
});

orange.addEventListener('click', function(){
    console.log('user clicked on orange');
    zodiac = 'orange';
    image.src = "../images/orange-juice.png";
});

milk.addEventListener('click', function(){
    console.log('user clicked on milk');
    zodiac = 'milk';
    image.src = "../images/milk.png";
});

strawberry.addEventListener('click', function(){
    console.log('user clicked on strawberry');
    zodiac = 'strawberry';
    image.src = "../images/strawberry.png";
});

apple.addEventListener('click', function(){
    console.log('user clicked on apple pie');
    zodiac = 'apple';
    image.src = "../images/apple-pie.png";
});

cereal.addEventListener('click', function(){
    console.log('user clicked on cereal');
    zodiac = 'cereal';
    image.src = "../images/cereal.png";
});

pancake.addEventListener('click', function(){
    console.log('user clicked on pancake');
    zodiac = 'pancake';
    image.src = "../images/pancakes.png";
});

toast.addEventListener('click', function(){
    console.log('user clicked on toast');
    zodiac = 'toast';
    image.src = "../images/toast.png";
});

bagel.addEventListener('click', function(){
    console.log('user clicked on bagel');
    zodiac = 'bagel';
    image.src = "../images/bagel.png";
});

donut.addEventListener('click', function(){
    console.log('user clicked on donut');
    zodiac = 'donut';
    image.src = "../images/donut.png";
});

muffin.addEventListener('click', function(){
    console.log('user clicked on muffin');
    zodiac = 'muffin';
    image.src = "../images/muffin.png";
});

yolk.addEventListener('click', function(){
    console.log('user clicked on yolk');
    zodiac = 'yolk';
    image.src = "../images/yolk.png";
});



const submit = document.getElementById("submit");
submit.addEventListener('click', function(){
    console.log(`${zodiac} ${astrological}`);
});
