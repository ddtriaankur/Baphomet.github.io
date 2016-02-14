var x = y = 100
var angle = 0
var r =0
function setup(){
  createCanvas(1350,550)
  background(122,99,22)
}

function draw(){
myS()
}

function myS(){

x = (sin(angle*4)*(width/2)+ width/2 )
// y = (sin(angle)*(height/2) + height/2)
y = sin(angle*8)*50 + height/2
angle+= 0.25/128
fill(r,25)
noStroke()
  ellipse(x,y, 22, 22)
}
