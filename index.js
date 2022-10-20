// TODO: Include packages needed for this application
// DEPENDENCIES

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// DATA - store questions in array, then prompt that array below
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose a license:',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
]

// FUNCTIONS
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

inquirer.prompt(questions)
.then((response) => {
    fs.writeFile('README.md', generateMarkdown(response), (err) =>
    err ? console.error(err) : console.log('Success!'))
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();