import * as inquirer from "inquirer";

import * as path from "path";

import createDirectory from "./functions/createDirectory";
import cloneTemplate from "./functions/cloneTemplate";

import { pkgManagerType, templateType } from "./types";
import chalk from "chalk";

const CHOICES: templateType[] = [
  "next-js-auth0-tailwind",
  "next-js-tailwind-css",
  "next-js-tailwind-datocms",
  "next-js-ts-tailwind",
  "react-js",
  "react-js-with-typescript",
  "react-native-typescript",
  "typescript-project",
  "solid-js",
  "solid-js-with-typescript",
];

const QUESTIONS = [
  {
    name: "template",
    type: "list",
    message: "What project would you like to generate?",
    choices: CHOICES,
  },
  {
    name: "name",
    type: "input",
    message: "Enter a name for your project: ",
    default: "new-project",
  },
  {
    name: "pkg-manager",
    type: "list",
    message: "Choose a package manager: ",
    choices: ["yarn", "npm", "pnpm"],
  },
];

const WORKING_DIR = process.cwd();

const kaam = () => {
  inquirer.prompt(QUESTIONS).then((answers) => {
    const name: string = answers["name"];
    const template: templateType = answers["template"];
    const pkgManager: pkgManagerType = answers["pkg-manager"];

    const targetPath = path.join(WORKING_DIR, name);

    if (createDirectory(targetPath).rerun) {
      kaam();
    }

    cloneTemplate(template, name, pkgManager);
  });
};

kaam();
