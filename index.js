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
            name: 'gitHubUsername',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'repoName',
            message: 'What is your GitHub Repository name (no spaces)?'
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
            message: 'Please provide any usage information. The next question will ask you for a link to a screenshot. If none, leave blank.'
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Please provide the link to a screenshot. Be sure to check that the proper file path is in place.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license would you like?',
            choices: [, 'MIT License', 'GNU GPLv3', 'Apache License 2.0', 'The Unilicense']
        },
        {
            type: 'input',
            name: 'otherContributors',
            message: 'Please provide the names of other contributors. If none, leave blank.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide any testing information you have gathered. If none, leave blank.',
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

![GitHub](https://img.shields.io/github/license/${response.gitHubUsername}/${response.repoName})

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

![Screenshot](${response.screenshot})
    
## License
    
${response.license} 
    
Copyright (c) 2021 ${response.fullName}
    
## Contributing
    
${response.fullName}

${response.otherContributors}
    
## Tests
    
${response.tests}
    
## Questions?
    
[${response.fullName} Github](${response.gitHub})
    
For any questions, please send me an [email](${response.email}).`;


const init = () => {
    promptUser().then((response) => {
        try {
            const markDown = mDTemplate(response)
            fs.writeFileSync('GeneratedREADME.md', markDown);
            console.log('Success, README generated!');
        } catch (error) {
            console.log(error)
        }
    })
}

init();