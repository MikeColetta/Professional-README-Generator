const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');

const promptUser = () => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'fullName',
            message: 'What is your first and last name?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project called?'
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please provide the link to your project.'
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Please provide a short description of your project.'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide some installation instructions. The link provided will appear below these instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide the link to a screenshot. Be sure to check that the proper file path is in place.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license would you like?',
            choices: [, 'MIT License', 'GNU GPLv3', 'Apache License 2.0', 'No License']
        },
        {
            type: 'input',
            name: 'otherContributors',
            message: 'Please provide the names of other contributors. If none, leave blank.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide any testing information you have gathered.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the link to your gitHub profile?',
        }
    ]);

const mDTemplate = (response) =>
`# ${response.title}

## Description
    
${response.desc}
    
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
    
## Installation
    
${response.install}
    
[Link to ${response.title}](${response.link})
    
## Usage
    
${response.usage}
    
## License
    
${response.license} 
    
Copyright (c) 2021 ${response.fullName}
    
## Contributing
    
${response.fullName}
${response.otherContributors}
    
## Tests
    
${response.tests}
    
## Questions
    
Github: ${response.gitHub}
    
Email: ${response.email}`;


const init = () => {
    promptUser().then((response) => {
        const markDown = mDTemplate(response)
        fs.writeFileSync('GeneratedREADME.md', markDown, 
        (err) => err ? console.error(err) : console.log('Success, README generated!')
    )
    })
}

init();