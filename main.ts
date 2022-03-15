#!/usr/bin/env node

import * as inquirer from 'inquirer';

import * as fs from 'fs';
import * as path from 'path';

// eslint-disable-next-line import/no-unresolved, import/extensions
import createDirectory from './functions/createDirectory';

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

const WORKING_DIR = process.cwd();

inquirer.prompt(QUESTIONS).then((answers) => {
  // eslint-disable-next-line prefer-destructuring, dot-notation
  const name = answers['name'];

  const targetPath = path.join(WORKING_DIR, name);

  // eslint-disable-next-line no-useless-return
  if (!createDirectory(targetPath)) return;
});
