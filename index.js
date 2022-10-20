// TODO: Include packages needed for this application
// DEPENDENCIES
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// DATA - store questions in array, then prompt that array below
// const questions = [
    inquirer.prompt([
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
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'How can I reach you with additional questions?',
            name: 'contact',
        },
    ])
// ]
// inquirer.prompt(questions)
.then((response) => {
    const readme = generateREADME(response)
    fs.writeFile('README.md', readme, (err) =>
    err ? console.error(err) : console.log('Success!'))
})

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function generateREADME(data) {
    return `
    
    `
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
