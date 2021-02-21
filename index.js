const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project called?'
        }
    ]);

const init = () => {
    promptUser();
}

init();