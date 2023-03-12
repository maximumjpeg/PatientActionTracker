const fs = require('fs');
const readline = require('readline');
const process = require('process');

const trackPatients = () => {
  if (!process.argv[2]) {
    console.log('ERROR: No .txt input file detected!');
    return
  }

  const incompleteData = true;

  const patients = {};

  const rl = readline.createInterface({
    input: fs.createReadStream(process.argv[2])
  });

  rl.on('line', (line) => {
    const [type, ...args] = line.split(' ');

    if (type === 'Patient') {
      patients[args[0]] ? null : patients[args[0]] = {treatments: []};
    }
    if (type === 'Action') {
      const [action, name, timeStamp, code] = args;

      if (action === 'Intake') {
        patients[name].intake = new Date(timeStamp);
      }
      if (action === 'Treatment') {
        patients[name].treatments.push({code: new Date(timeStamp)});
      }
      if (action === 'Discharge') {
        patients[name].discharge = new Date(timeStamp);
      }
    }
  });

  rl.on('close', () => {
    for (var patient in patients) {
      var currPatient = patients[patient];
      var { intake, discharge, treatments } = currPatient;

      if (discharge > intake && treatments.length > 0) {
        var stayLength = discharge.getTime() - intake.getTime();
        var hours = stayLength / (1000 * 60 * 60);
        var minutes = Math.round((hours % 1) * 60).toFixed(1);
        hours = Math.floor(hours).toFixed(1);
        console.log(`Patient ${patient} stayed for ${hours} hours ` +
          `and ${minutes} minutes and received ${treatments.length} treatments`);
      }
    }
    partialData = false;
  });
  if (incompleteData) {
    console.log('ERROR: Please check input file for complete patient data!');
  }
}

trackPatients();

module.exports = { trackPatients };
