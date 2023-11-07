const inquirer = require('inquirer');
const fs = require ('fs')






// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = ['What is your GitHub username?','What is your email adress?',
'What is your projects name?','Please write a short description of your project?',
 'What kind of license should your project have?', 
'What command should be run to install dependencies?',
'What command should be run to run tests?',
'What does the user need to know about using the repo?',
'What does the user need to know about contributing to the repo' ];



// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'username',
      },
      {
          type: 'input',
          message: questions[1],
          name: 'email',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'projname',
          },
          {
            type: 'input',
            message: questions[3],
            name: 'projdesc',
          },
          {
            type: 'list',
            message: questions[4],
            name: 'lisc',
            choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3', 'NONE']
          },
          {
            type: 'input',
            message: questions[5],
            name: 'dependencies',
          },
          {
            type: 'input',
            message: questions[6],
            name: 'tests',
          },
          {
            type: 'input',
            message: questions[7],
            name: 'userknowlege',
          },
          {
            type: 'input',
            message: questions[8],
            name: 'repoknowledge',
          },
    ])
    .then((response) =>{ // user answers stored in response
      
      console.log(response);
      writeToFile('README.md', response)

    });
  
}

// Function call to initialize app



function writeToFile(fileName, data) {

if (data.lisc== 'MIT'){
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'  ;
}else if (data.lisc== 'APACHE 2.0' ){
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
}else if (data.lisc== 'GPL 3.0' ){
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
}else if (data.lisc== 'BSD 3' ){
    badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
}

    var data = 
    `# ${data.projname}

## Description: 
${badge}
${data.projdesc}


## Table of Contents 

I. Installation

II. Usage
 
III. License

IV. Contributing

V. Tests

VI. Questions

## Installation
${data.dependencies}

## Usage
${data.userknowlege}

## License 
${data.lisc}

## Contributing 
${data.repoknowledge}

## Tests 
${data.tests}

## Questions

Find Me on GitHub: https://github.com/${data.username}

Reach out to me with questions at ${data.email}

`

   fs.writeFile('README.md', data, (err) => {
      if (err) {
        console.error(err);
      }else{
        console.log("sucess!")
      }
    });
}
   
 



init();                                         // Runs everything on startup








// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections 
// entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
