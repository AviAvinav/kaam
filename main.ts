#!/usr/bin/env node

import * as inquirer from 'inquirer';

import * as fs from 'fs';
import * as path from 'path';

const CHOICES = fs.readdirSync(path.join(__dirname, 'templates'));

const QUESTIONS = [
  {
    name: 'template',
    type: 'list',
    message: 'What project would you like to generate?',
    choices: CHOICES,
  },
  {
    name: 'name',
    type: 'input',
    message: 'Enter a name for your project: ',
    default: 'new-project',
  },
  {
    name: 'license',
    type: 'list',
    message: 'Choose a license: ',
    choices: ['MIT', 'ISC', 'Apache', 'GPLv3', 'BSD', 'None'],
  },
  {
    name: 'prettier',
    type: 'list',
    message: 'Would you like to use Prettier?',
    choices: ['Yes', 'No'],
  },
  {
    name: 'pkg-manager',
    type: 'list',
    message: 'Choose a package manager: ',
    choices: ['yarn', 'npm', 'pnpm'],
  },
];

inquirer.prompt(QUESTIONS).then((answers) => {
  console.log(answers);
});
