// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ''
  } 

     return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;;
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } 
  
  switch (license) {
      case 'MIT':
          return 'https://opensource.org/licenses/MIT';
          
      case 'GPLv3':
          return 'https://www.gnu.org/licenses/gpl-3.0';
          
      case 'Apache 2.0':
          return 'https://opensource.org/licenses/Apache-2.0';
          
      case 'BSD 3-Clause':
          return 'https://opensource.org/licenses/BSD-3-Clause';
          
      default:
          return '';
  };
  };


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
}
return `
## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
 

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testing}

  ## Questions
  If you have any questions, you can reach out to me via:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})

  ${data.questions}

`;
}

export default generateMarkdown;
