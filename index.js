// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateREADME } = require('./utilities/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of the project?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'special',
        message: 'What makes your project stand out?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the step required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license to use for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'ISC', 'None'],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email Address.',
    }
];

function init() {
    // TODO: Create a function to initialize app
    inquirer.prompt(questions)
        .then(answers => {
            const readmeContent = generateREADME(answers);

            fs.writeFile('README.md', readmeContent, (err) =>
                err ? console.log(err) : console.log('README.md file has been successfully generated!')
            );
        });
    }

// Function call to initialize app
init();