var canvas;
var pul=300;

var cor=200;
var bol = 0;
var lob = 0;
function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
}

function draw() {
  if (pul<600 && bol == 0){
    pul = pul+5;
    if(pul==600){
      bol = 1;
    }
  }
  else{
    pul = pul-5;
    if(pul==300){
      bol = 0;
    }
  }
  if (cor<250 && lob == 0){
    cor = cor+5;
    if(cor==250){
      lob = 1;
    }
  }
  else{
    cor = cor-5;
    if(cor==200){
      lob = 0;
    }
  }
  background(255);
  // Scale the mouseX value from 0 to 640 to a range between 0 and 175
  var c = map(cor, 0, width, 40, 300);
  // Scale the mouseX value from 0 to 640 to a range between 40 and 300
  var d = map(pul, 0, width, 40, 300);
  fill(100, 0, c);
  ellipse(width/2, height/2, c, c+15);
  fill(200, 0, d-150);
  ellipse(width/2-80, height/2, d, d+40);
  ellipse(width/2+80, height/2, d, d+40);
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};