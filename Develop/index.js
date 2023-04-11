// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var markdown_Readme = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Description?"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage?"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Contributors?"
    },
    {
        type: "input",
        name: "email",
        message: "Email?"
    },
    {
        type: "input",
        name: "github",
        message: "Github link?"
    },
    {
        type: "list",
        name: "license",
        message: "License?",
        choices: ['MIT','ISC', 'GNUPLv3', 'none'],
        filter(val){
            return val.toLowerCase();
        }
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers)=>{
        var mark = markdown_Readme.generateMarkdown(answers);
        fs.writeFile('README.md', mark, function(err){
            if (err) {
                console.log("Could not generate file",err);
            } else {
                console.log("Generated new README.md within current folder")
            }
        })
    })

}

// Function call to initialize app
init();
