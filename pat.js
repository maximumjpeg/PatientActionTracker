const fs = require('fs');
const readline = require('readline');
const process = require('process');

// patients Object to track all patients and activity
const patients = {};

// readline interface with input set to 2nd argument of node call
const rl = readline.createInterface({
  input: fs.createReadStream(process.argv[2])
});

// process each line of text input
rl.on('line', (line) => {
  const [type, ...args] = line.split(' ');
  // add new patients and include a treatments array
  if (type === 'Patient') {
    patients[args[0]] ? null : patients[args[0]] = {treatments: []};
  }
  // if patient has any actions
  if (type === 'Action') {
    const [action, name, timeStamp, code] = args;
    // if action is intake
    if (action === 'Intake') {
      patients[name].intake = new Date(timeStamp);
    }
    // if action is treatment
    if (action === 'Treatment') {
      patients[name].treatments.push({code: new Date(timeStamp)});
    }
    // if action is discharge
    if (action === 'Discharge') {
      patients[name].discharge = new Date(timeStamp);
    }
  }
});

// sort through patients object to format data for console log
rl.on('close', () => {
  for (var patient in patients) {
    var currPatient = patients[patient];
    var { intake, discharge, treatments } = currPatient;
    // if discharged after intake and received at least 1 treatment
    if (discharge > intake && treatments.length > 0) {
      var stayLength = discharge.getTime() - intake.getTime();
      var hours = stayLength / (1000 * 60 * 60);
      var minutes = Math.round((hours % 1) * 60).toFixed(1);
      hours = Math.floor(hours).toFixed(1);
      console.log(`Patient ${patient} stayed for ${hours} hours`,
      `and ${minutes} minutes and received ${treatments.length} treatments`);
    }
  }
});