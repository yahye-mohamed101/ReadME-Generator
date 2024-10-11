// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "project",
    },

    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },

    {
        type: "input",
        message: "What are the table of contents?",
        name: "contents"
    },

    {
        type: "input",
        message: "How would one install this application?",
        name: "installation"
    },

    {
        type: "input",
        message: "How would one use this application?",
        name: "usage"
    },

    {
        type: "input",
        message: "What is the license?",
        name: "license"
    },

    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contribution"
    },

    {
        type: "input",
        message: "Provide tests.",
        name: "testing"
    },

    {
        type: "input",
        message: "Questions?",
        name: "questions"
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        else {
            console.log('Successfully generated README.md file!')
        }
    })
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadMe(answers);
        writeToFile('dist/README.md', readmeContent);

    })
}
    

// Function call to initialize app
init();






