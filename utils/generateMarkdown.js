// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT License'){
     badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else
  if (license === 'Apache License 2.0'){
    badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else 
  if (license === 'GNU General Public License v3.0'){
    badge = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
  } else
  if (license === 'BSD 3'){
    badge = `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else
  if (license === 'None'){
    badge = ''
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if (license === 'MIT License'){
    link = `https://choosealicense.com/licenses/mit/`;
 } else
 if (license === 'Apache License 2.0'){
    link = `https://choosealicense.com/licenses/apache-2.0/`;
 } else 
 if (license === 'GNU General Public License v3.0'){
    link = `https://choosealicense.com/licenses/gpl-3.0/`;
 } else
 if (license === 'BSD 3'){
    link = `https://choosealicense.com/licenses/bsd-3-clause/`;
 } else
 if (license === 'None'){
    link = ''
 }
 return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = ''
  if (license === 'MIT License' || license === 'Apache License 2.0' || license === 'GNU General Public License v3.0' || license === 'BSD 3'){
    section = `
  ## License
  This application is covered by [${license}](${renderLicenseLink(license)}).
  `;
  } else
  if (license === 'None'){
    section = ``;
  }
  return section
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ### ${renderLicenseBadge(data.license)}

  ## Table of Contents:
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ${renderLicenseSection(data.license)}
  
  ## Questions
  Github profile: [${data.github}](https://github.com/${data.github})  
  Please reach out by email (${data.email}) with additional questions.
`
}


module.exports = generateMarkdown;
