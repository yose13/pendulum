const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var pendulum1, rope;

function setup(){
    var canvas = createCanvas(windowWidth/2, windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    };
mConstraint = MouseConstraint.create(engine, options);
World.add(world, mConstraint);

    pendulum1=new Pendulum(70, 480, 35);
	pendulum2=new Pendulum(140, 480, 35);
	pendulum3=new Pendulum(210, 480, 35);
	pendulum4=new Pendulum(280, 480, 35);
	pendulum5=new Pendulum(350, 480, 35);
	rope1=new Sling(pendulum1.body, {x:70, y:50})
	rope2=new Sling(pendulum2.body, {x:140, y:50})
	rope3=new Sling(pendulum3.body, {x:210, y:50})
	rope4=new Sling(pendulum4.body, {x:280, y:50})
	rope5=new Sling(pendulum5.body, {x:350, y:50})


    
}

function draw(){
    background("black");
    Engine.update(engine);
    
    pendulum1.display();
	pendulum2.display();
	pendulum3.display();
	pendulum4.display();
	pendulum5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  

}

function mouseDragged(){
    Matter.Body.setPosition(this.pendulum1.body, {x:mouseX, y:mouseY});
}
