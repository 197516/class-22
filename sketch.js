const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var spaceEng, myworld;
var box1,box2
var ground


function setup() {
  createCanvas(400,400);
 spaceEng= Engine.create();
 myworld= spaceEng.world;

 box1  = new Box(200,300,50,100);

 box2 = new Box(240,100,50,50);

 ground = new Ground(200,390,400,20)
}

function draw() {
  background(0); 
Engine.update(spaceEng);

 box1.display();
 box2.display();
 ground.display();
}