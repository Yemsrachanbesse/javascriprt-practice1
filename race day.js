let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge=18;
if (runnerAge>=18 && registeredEarly){
  raceNumber +=1000;
  }
if(runnerAge>=18 && registeredEarly){console.log(`Racenumber ${raceNumber} will race at 9:30 am.' `);
  }
else if(runnerAge>=18 && !registeredEarly){
  console.log(`Racenumber ${raceNumber} will race at 11:00 am`);
}else if (runnerAge < 18){
  console.log(`Racenumber ${raceNumber} will race at 12:30 pm'`);
}