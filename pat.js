const fs = require('fs');
const readline = require('readline');
const process = require('process');

// POJO to track all patients and actions
const patients = {};

const rl = readline.createInterface({
  input: fs.createReadStream(process.argv[2])
});

rl.on('line', (line) => {
  const [type, ...args] = line.split(' ');
  // add any new patients to POJO 'Patients' as a new object with a treatments array property
  if (type === 'Patient') {
    !patients[args[0]] ? patients[args[0]] = {treatments: []} : null;
  }
  // if patient has any actions
  if (type === 'Action') {
    const [action, name, timeStamp, code] = args;
    // if intake
    if (action === 'Intake') {
      patients[name].intake = new Date(timeStamp);
    }
    // if treatment
    if (action === 'Treatment') {
      patients[name].treatments.push({code: new Date(timeStamp)});
    }
    // if discharge
    if (action === 'Discharge') {
      patients[name].discharge = new Date(timeStamp);
    }
  }

});

rl.on('close', () => {
  for (var patient in patients) {

    // is discharged after intake?
    if (patients[patient].discharge > patients[patient].intake) {
      var totalTreatments = patients[patient].treatments.length;
      var intake = patients[patient].intake;
      var discharge = patients[patient].discharge;
      var stayLength = discharge.getTime() - intake.getTime();
      var hours = stayLength / (1000 * 60 * 60);
      var minutes = Math.round((hours % 1) * 60).toFixed(1);
      hours = Math.floor(hours).toFixed(1);
      console.log(`Patient ${patient} stayed for ${hours} hours and ${minutes} minutes and received ${totalTreatments} treatments`);
    }
  }

});

