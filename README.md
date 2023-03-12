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
P.A.T. will log the formatted Patient information to the console<br />
You can run P.A.T. with an example .txt file with the command ```npm start```

## Testing P.A.T.
Open a Terminal instance from the P.A.T. root directory<br />
Run the test suite with the command ```npm test```<br />
Test results will log to the console

## Design decisions

I chose to use JavaScript for it's versatility with Front End and Back End development, ease of use and the sheer volume of JS frameworks, libraries and modules availble. Since the input and output were both text, building a User Interface felt overcomplilcated, so I wrote a Node program that logs the expected patient data right to the console. I wanted the User Experience to be straightforward and simplified, quick and easy. The expected inputs and outputs were already provided so I didn't change anything there. The user does need to have the input .txt file in the same directory as the script file and that could be a painpoint for some. For the handling of patient data, I chose to use a plain JavaScript Object for it's fast lookup times, extremely useful methods and simple structure and use. Being wary of time and space complexity, the program does have to read the input and then iterate through the Patients Object to log each line of appropriate patient data. The readilne module is a great choice here becuase it can read large files without having to load the entirety to memory. I chose Jest for the test suite because of it's versatility, robustness and ease of use.

## Thinking about the problem
I didn't want to introduce any more complexity than I had to in order to come up with a working solution. Once I decided on using the existing CLI as the UI, I thought about the transformation of the input into the output. For the sake of simplicity and keeping things lean, I didn't want to use any extra dependencies to parse or format any data so I exclusively used built-in objects and methods to parse and organize the patient data. JS Date objects with some pretty simple math to get the hours and minutes. Plain JS Objects and Arrays to store the patients and their activities. I had the inputs and outputs given to me, so I just broke down the steps to transform the input into the output. I went with a 2 pass approach. Parsing the input data and storing it patient by patient before iterating through and console logging all the appropriate patient data in a more human readable format.

## Thoughts and comments
Overall, this was a fun project that allowed me to learn a few new things. I made sure to include the treatment codes in the Patients object, even though they were not used in the prompt.
