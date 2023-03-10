const fs = require('fs');
const readline = require('readline');
const process = require('process');

// POJO
const patients = {};

const rl = readline.createInterface({
  input: fs.createReadStream(process.argv[2])
});

rl.on('line', (line) => {
  var entry = line.split(' ');
  // console.log(entry);
  if (entry[0] === 'Patient') {
    if (!patients[entry[1]]) {
      patients[entry[1]] = [];
    }
  }

  if (entry[0] === 'Action') {
    var patient = entry[2];
    if (patients[patient]) {
      patients[patient].push(entry[1]);
    }
  }
});

rl.on('close', () => {
  for (var patient in patients) {
    console.log(`Patient ${patient} received ${patients[patient].length - 2} treatments`)
  }
});

