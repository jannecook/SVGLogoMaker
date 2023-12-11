const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'checkbox',
        message: 'Select which shapes to include',
        name: 'shapes',
        choices: [
            new inquirer.Separator( ' = Shapes = '),
            {
                name: 'Triangle',
            },
            {
                name: 'Circle',
            },
            {
                name: 'Square',
            },
        ]
    }
    {
        questions
    },
  ])
  const questions = [
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like to use',
    },
];

init();
