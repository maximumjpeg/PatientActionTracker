# Patient Action Tracker
P.A.T. is a Node program that will track patient activity from any .txt file input and log the formatted data to the console<br />
Formatted data will include the each patient's name, their total stay in hours and minutes and total number of treatments

#### Example Input .txt file:

```
Patient John
Action Intake John 2023-01-06T09:45:00Z
Action Discharge John 2023-01-15T15:58:00Z
Action Treatment John 2023-01-09T11:35:00Z F5GZ
Patient Anne
Action Treatment John 2023-01-07T07:11:00Z GG34
Action Treatment John 2023-01-08T06:24:00Z BZ42
Action Intake Anne 2023-01-04T01:22:00Z
Action Treatment John 2023-01-10T16:36:00Z R0F1
Action Treatment Anne 2023-01-05T22:23:00Z R0F1
Action Discharge Anne 2023-01-09T04:56:00Z
Patient Polly
Action Intake Polly 2023-01-09T12:00:00Z
Action Treatment Polly 2023-01-09T13:00:00Z GG34
Action Treatment Polly 2023-01-09T13:00:00Z R0F1
Action Discharge Polly 2023-01-10T12:00:00Z
```

#### Example Console Output:

```
Patient John stayed for 222.0 hours and 13.0 minutes and received 4 treatments
Patient Anne stayed for 123.0 hours and 34.0 minutes and received 1 treatments
Patient Polly stayed for 24.0 hours and 0.0 minutes and received 2 treatments
```

## How To Use P.A.T.
Open a Terminal instance from the PatientActionTracker root directory<br />
Install required dependencies with the command ```npm install```<br />
Run P.A.T. with any .txt file in the P.A.T. root directory<br />
Use the command ```node index.js yourTextFile.txt```, changing ```yourTextFile``` with the actual name<br />
P.A.T. will log the formatted Patient information to the console

## Testing P.A.T.
In a terminal instance from the P.A.T root directory
## Journey
Design decisions
## Notes
Thoughts and comments
