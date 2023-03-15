const fs = require('fs');
const readline = require('readline');
const { trackPatients } = require('./index.js');

describe('trackPatients', () => {
  test('should log an error message if no input file is detected', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    process.argv[2] = undefined;
    trackPatients();
    expect(consoleSpy).toHaveBeenCalledWith('ERROR: No .txt input file detected!');
    consoleSpy.mockReset();
  });

  test('should only log patient data if intake, discharge and 1 or more treatments', (done) => {
    const consoleSpy = jest.spyOn(console, 'log');
    process.argv[2] = 'testExample1.txt';
    trackPatients();
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Patient JarJar stayed for 222.0 hours and 13.0 minutes and received 4 treatments');
      done();
      consoleSpy.mockReset();
    }, 100);
  });

  test('should log all complete patient data, even if the actions aren\'t in chronological order', (done) => {
    const consoleSpy = jest.spyOn(console, 'log');
    process.argv[2] = 'testExample2.txt';
    trackPatients();
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Patient Padme stayed for 24.0 hours and 0.0 minutes and received 2 treatments');
      done();
      consoleSpy.mockReset();
    }, 100);
  });
});
