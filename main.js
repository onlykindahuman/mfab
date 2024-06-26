function setup() {
    createCanvas(500, 10000);


    let i = 0;
    textAlign(CENTER, CENTER);
    while (i < recipes.length) {
        fill(167, 245, 66);
        textSize(30);
        text(recipes[i].title, 75, 20 + i * 1000);
        fill(184, 157, 157);
        textSize(20);
        text(recipes[i].ingredient1, 75, 50 + i * 1000);
        fill(84, 140, 209);
        textSize(15);
        text(recipes[i].costing1, 75, 100 + i * 1000);
        text(recipes[i].measurement1, 75, 150 + i * 1000);
        fill(184, 157, 157);
        textSize(20);
        text(recipes[i].ingredient2, 75, 200 + i * 1000);
        fill(84, 140, 209);
        textSize(15);
        text(recipes[i].costing1, 75, 250 + i * 1000);
        text(recipes[i].measurement2, 75, 300 + i * 1000);
        fill(184, 157, 157);
        textSize(20);
        text(recipes[i].ingredient3, 75, 350 + i * 1000);
        fill(84, 140, 209);
        textSize(15);
        text(recipes[i].costing3, 75, 400 + i * 1000);
        text(recipes[i].measurement3, 75, 450 + i * 1000);
        fill(184, 157, 157);
        textSize(20);
        text(recipes[i].ingredient4, 75, 500 + i * 1000);
        fill(84, 140, 209);
        textSize(15);
        text(recipes[i].costing4, 75, 550 + i * 1000);
        text(recipes[i].measurement4, 75, 600 + i * 1000);
        image(recipes[i].picture, 170, 10 + i * 1000, 100, 100, 0, 0, 0, 0, CONTAIN);
        i = i + 1;
     
    }
      

    
    
}

function preload() {
    let req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("get", "http://192.168.16.83:8080/mirza/");
    req.responseType = "json"
    req.send();
}
let recipes;
function reqListener() {
    recipes = this.response;
    console.log(recipes);
    let i = 0;
    while (i < recipes.length) {
        recipes[i].picture = loadImage(recipes[i].picture);

        i = i + 1; 
    }
}