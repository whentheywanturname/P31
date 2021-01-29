const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var DropSquad
var rains=[];
function preload(){
}

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    background(0);
    Engine.update(engine);
    this.trajectory = []
    MaxDrop = 100;
    for(rains=0;rains<100;rains++){
        DropSquad = new rain(Math.random(0,400),Math.random(0,400));
        DropSquad.display();
    }
    
}   

