class Markdown_Readme{

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
static renderLicenseBadge(license) {
  var badges = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    gnuplv3: '[![License: LPGL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    isc: '[![License: ISC v3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    none: ''
  }
  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
static renderLicenseLink(license) {
  var licenseLinks = {
    mit: '[MIT](https://choosealicense.com/licenses/mit/)',
    GNUGPLv3: '[GNUGPLv3](https://choosealicense.com/licenes/gpl-3.0/)',
    isc: '[GNUGPLv3](https://choosealicense.com/licenes/isc/)',
    none: ''
  }
  return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
static renderLicenseSection(license) {
  if (license === 'none'){
  return '';}
  else if (license){
    return `Licensed under the ${this.renderLicenseLink(license)} license`
  }
}

// TODO: Create a function to generate markdown for README

static generateMarkdown(data) {
  return `
# ${data.title}
${this.renderLicenseBadge(data.license)}

## Table of Content
- [Project description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributors](#Contributors)
- [Questions](#Questions)
- [License](#License)

## Description
${data.description}

## Usage
${data.usage}

## Installation
${data.installation}

## Contributing
${data.contribution}

## Questions
${data.email}
${data.github}

## License
${this.renderLicenseSection(data.license)}
`;
}
}
module.exports = Markdown_Readme;
