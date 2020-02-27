 function Robot(name,worksName){
 this.name=name;
 this.worksName = worksName;
	
 this.work = function(){
 console.log('Я ' + this.name + ' - ' + this.worksName);
 }
 }
 var robot = new Robot('Robot','я просто працюю');
 robot.work();

 function CoffeRobot (name,worksName){
 Robot.call(this);
 this.name=name;
 this.worksName = worksName;
 }
 var coffeRobot = new CoffeRobot('CoffeRobot ','я варю каву');
 coffeRobot.work();

 function RobotDancer (name,worksName){
 Robot.call(this);
 this.name=name;
 this.worksName = worksName;
 }
 var robotDancer = new RobotDancer('RobotDancer','я просто танцюю');
 robotDancer.work();

 function RobotCoocker (name,worksName){
 Robot.call(this);
 this.name=name;
 this.worksName = worksName;
 }
 var robotCoocker = new RobotCoocker('RobotCoocker','я просто готую');
 robotCoocker.work();
 
var robots = [];

robots.push(robot);
robots.push(coffeRobot);
robots.push(robotDancer);
robots.push(robotCoocker);

for(var i = 0; i < robots.length; i++){
    robots[i].work();
}