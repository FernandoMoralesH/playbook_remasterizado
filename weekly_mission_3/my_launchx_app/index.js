const MissionCommander = require('./app/missionCommander');
const carlo = new MissionCommander("Carlo", 22, "Javascript")
const fer = new MissionCommander ("Fernanda Ochoa")
const rodrigo = new MissionCommander ("Rodrigo")
console.log("Nombre MC BackEnd: "+ carlo.name + carlo.age + carlo.program)
console.log("Nombre MC Onboarding: " + fer.name)
console.log("Nombre MC FrontEnd: " + rodrigo.name)