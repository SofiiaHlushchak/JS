function Robot (name, act){
    this.name = name;
    this.act = act;
};

Robot.prototype.work = function(){
    console.log(" Я " + this.name+ " - " + " я " + this.act);
};

var robot = new Robot("robor ", " просто працюю");
robot.work();

function CoffeRobot(name,act){
    Robot.call(this);
    this.name = name;
    this.act = act;
};

CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;

CoffeRobot.prototype.work = function(){
    console.log(" Я " + this.name + " - " + " я " + this.act);
};

var cofferobor = new CoffeRobot("CoffeRobot","Варю каву");
cofferobor.work();

function RobotDancer(name,act){
    Robot.call(this);
    this.name = name;
    this.act = act;
};

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

RobotDancer.prototype.work = function(){
    console.log(" Я " + this.name + " - " + " я " + this.act);
};

var robotDancer = new RobotDancer("RobotDancer","танцюю");
robotDancer.work();


function RobotCoocker(name,act){
    Robot.call(this);
    this.name = name;
    this.act = act;
};

RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;

RobotCoocker.prototype.work = function(){
    console.log(" Я " + this.name + " - " + " я " + this.act);
};

var robotCoocker = new RobotCoocker("RobotCoocker","готую");
robotCoocker.work();

var robots = [];

robots.push(robot);
robots.push(cofferobor);
robots.push(robotDancer);
robots.push(robotCoocker);

for(var i = 0; i < robots.length; i++){
    robots[i].work();
}
