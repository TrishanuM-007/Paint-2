const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var color
var paint, database;
var position;
trajectory =[];
function preload(){
color = loadImage("black4.png");

}
function setup() {
  database = firebase.database();
  createCanvas(1400,600);
  engine = Engine.create();
    world = engine.world;
    var inkPosition = database.ref('Paint/postion')
    inkPosition.on ("value",readPostion,showError);


}

function draw() {
  //background(255,255,255);  
  drawSprites();
}
function mouseDragged(){
  var position = [mouseX, mouseY];
  trajectory.push(position);

 for (var i=0; i<trajectory.length; i++){
    image(color, trajectory[i][0], trajectory[i][1]);
  }

}
function readPosition(data){
  position = data.val()
  ink.x = position.x
  ink.y = position.y

}
function writePosition(x,y){
  database.ref('Paint/position').set({
      'x': position.x + x, 'y': position.y + y
  })    
 }
 


