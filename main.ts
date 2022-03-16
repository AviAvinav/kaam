#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import * as inquirer from 'inquirer';

import * as fs from 'fs';
import * as path from 'path';

import createDirectory from './functions/createDirectory';
import cloneTemplate from './functions/cloneTemplate';

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
  // eslint-disable-next-line prefer-destructuring, dot-notation
  const template = answers['template'];
  // eslint-disable-next-line prefer-destructuring, dot-notation
  const pkgManager = answers['pkg-manager'];

  const targetPath = path.join(WORKING_DIR, name);

  // eslint-disable-next-line no-useless-return
  if (!createDirectory(targetPath)) return;

  cloneTemplate(template, name, pkgManager);
});
