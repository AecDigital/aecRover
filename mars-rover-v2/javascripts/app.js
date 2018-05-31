// Rover Object Goes Here
// ======================
var aecRover = {
direction: 'N',
X: 0,
Y: 0,
travelLog: [[0, 0]],
}

var obstacle = {
X: 5,
Y: 3,
}

// ======================

//GIRANDO NUESTRO ROVER...
function turnLeft(aecRover){
  // NORTH --> WEST
  if (aecRover.direction === 'N'){ 
    aecRover.direction  = 'W';
  }
  // WEST --> SOUTH
  else if (aecRover.direction  === 'W'){ 
    aecRover.direction  = 'S';
  }
  // SOUTH --> EAST
  else if (aecRover.direction  === 'S'){ 
    aecRover.direction = 'E';
  }
  // EAST --> NORTH
  else if (aecRover.direction  === 'E'){ 
    aecRover.direction = 'N';
  }
  console.log("turnLeft was called!" + " New aecRover direction is " + aecRover.direction);
}

function turnRight(aecRover){
   // NORTH --> EAST
   if (aecRover.direction  === 'N'){ 
    aecRover.direction  = 'E';
  }
  // EAST --> SOUTH
  else if (aecRover.direction  === 'E'){ 
    aecRover.direction  = 'S';
  }
  // SOUTH --> WEST
  else if (aecRover.direction  === 'S'){ 
    aecRover.direction  = 'W';
  }
  // WEST --> NORTH
  else if (aecRover.direction  === 'W'){ 
    aecRover.direction  = 'N';
  }
console.log("turnRight was called!" + " New aecRover direction is " + aecRover.direction);
}

//MOVIENDO NUESTRO ROVER...

  //Hacia delante:
function moveForward(aecRover){
      // NORTH
      if (aecRover.direction === 'N'){ 
        aecRover.Y -= 1;
        aecRover.travelLog.push([aecRover.X, aecRover.Y]);
      }
      // SOUTH
      else if (aecRover.direction === 'S'){ 
        aecRover.Y += 1;
        aecRover.travelLog.push([aecRover.X, aecRover.Y]);
      }
      // EAST
      else if (aecRover.direction === 'E'){ 
        aecRover.X += 1;
        aecRover.travelLog.push([aecRover.X, aecRover.Y]);
      }
      // WEST
      else if (aecRover.direction === 'W'){
        aecRover.X -= 1;
        aecRover.travelLog.push([aecRover.X, aecRover.Y]);
      }
      console.log("moveForward was called. New Rover position is " + "X=" + aecRover.X + " Y=" + aecRover.Y);
}
  //Hacia atrás:
function moveBackward(aecRover){
  // NORTH
  if (aecRover.direction === 'N'){ 
    aecRover.Y += 1;
    aecRover.travelLog.push([aecRover.X, aecRover.Y]);
  }
  // SOUTH
  else if (aecRover.direction === 'S'){ 
    aecRover.Y -= 1;
    aecRover.travelLog.push([aecRover.X, aecRover.Y]);
  }
  // EAST
  else if (aecRover.direction === 'E'){ 
    aecRover.X -= 1;
    aecRover.travelLog.push([aecRover.X, aecRover.Y]);
  }
  // WEST
  else if (aecRover.direction === 'W'){
    aecRover.X += 1;
    aecRover.travelLog.push([aecRover.X, aecRover.Y]);
  }
  console.log("moveBackward was called. New aecRover position is " + "X=" + aecRover.X + " Y=" + aecRover.Y);
}

//DIRIGIENDO NUESTRO ROVER...
function commands() { // Solicita los movimientos para el rover
  var moves = prompt("Please, enter the aecRover moves, in format 'f l r b'. Exampl: fffrfflfff\n f:forward\n b:backward\n l:left\n r:right");  
    aecRover.command = moves;
    console.log(aecRover.command);
    
//Leyendo los comandos/instrucciones dadas al rover...
for(var i = 0; i < moves.length; i++){
  var instruction = moves[i];

  if (moves[i] == "f"){
    moveForward(aecRover);
      if(aecRover.Y > 10 || aecRover.Y < -10 || aecRover.X > 10 || aecRover < -10){
      console.log("Oopsa! aecRover is off of the griiiiiiiiddd!!!")
      }
      else if (((aecRover.X-obstacle.X)==1 && (aecRover.Y-obstacle.Y)==1) || ((obstacle.X-aecRover.X)==1 && (obstacle.Y-aecRover.Y)==1)){
      console.log("aecRover can see an obstacle in front of him.  Please, turn right or left now!")
      }
    }
  

  else if (moves[i]=="b"){
    moveBackward(aecRover);
      if(aecRover.Y > 10 || aecRover.Y < -10 || aecRover.X > 10 || aecRover < -10){
      console.log("Oopsa! aecRover is off of the griiiiiiiiddd!!!")
      }
      else if (((aecRover.X-obstacle.X)==1 && (aecRover.Y-obstacle.Y)==1) || ((obstacle.X-aecRover.X)==1 && (obstacle.Y-aecRover.Y)==1)){
      console.log("aecRover can see an obstacle in front of him.  Please, turn right or left now!")
      }
    }
  

  else if (moves[i]=="r"){
    turnRight(aecRover);
      if(aecRover.Y > 10 || aecRover.Y < -10 || aecRover.X > 10 || aecRover < -10){
      console.log("Oopsa! aecRover is off of the griiiiiiiiddd!!!")
      }
      else if (((aecRover.X-obstacle.X)==1 && (aecRover.Y-obstacle.Y)==1) || ((obstacle.X-aecRover.X)==1 && (obstacle.Y-aecRover.Y)==1)){
      console.log("aecRover can see an obstacle in front of him.  Please, turn right or left now!")
      }
     }
       
  

  else if (moves[i]=="l"){
    turnLeft(aecRover);
      if(aecRover.Y > 10 || aecRover.Y < -10 || aecRover.X > 10 || aecRover.X < -10){
      console.log("Oopsa! aecRover is off of the griiiiiiiiddd!!!")
      }
      else if (((aecRover.X-obstacle.X)==1 && (aecRover.Y-obstacle.Y)==1) || ((obstacle.X-aecRover.X)==1 && (obstacle.Y-aecRover.Y)==1)){
      console.log("aecRover can see an obstacle in front of him.  Please, turn right or left now!")
      }
      
  }
  //Verificando la validez de los comandos/instrucciones dadas...
  else if (moves[i] != "f" && moves[i] != "b" && moves[i] != "l" && moves[i] != "r"){
  alert("Please introduce valid commands. aecRover will read instructions in format f: moveFront b: moveBackward l: turnLeft r: turnRight.");
  return commands()
  }
    
  else if (moves[i] == undefined || moves[i] == "" ){
  alert("Please introduce valid commands. aecRover will read instructions in format 'f: moveFront b: movebackward l: turnLeft r: turnRight'. ");
  return commands()
  }
  }
}
console.log("Hi! Let me introduce myself… I am aecRover and I will be attending your commands from earth this way: \n You put turnLeft(aecRover), I wil turn left… \n You put turnRight(aecRover), I will turn right…\n You say moveForward(aecRover), Yes, I will move forward… \n You say moveBackward and… you know what? I will move backward! \n You wannna give me a bunch of instructions at once? No problem! Just type commands() \n Just one more thing… I´m on a 10x10 surface here in Mars so be careful, you don´t want to miss me! Who´s gonna take awesome photos? Of course, you can know where am I (and where I have been) everymoment by tiping… aecRover.travelLog\n That´s all, I´m ready, do you? \n Martians greetings J");
