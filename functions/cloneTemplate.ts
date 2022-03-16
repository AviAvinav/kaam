/* eslint-disable no-console */
import shell from 'shelljs';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';

const cloneTemplate = async (template: string, name: string, pkgManager: string) => {
  const spinner = createSpinner('Generating project...').start();
  await new Promise((resolve) => { setTimeout(resolve, 1000); });

  try {
    shell.exec(`cd ${name} && npx degit github:AviAvinav/nooli/templates/${template} && ${pkgManager} install`, { silent: true });
    await new Promise((resolve) => { setTimeout(resolve, 1000); });
    spinner.success({ text: '\nProject generated successfully! 🚀 🚀 🚀' });
    console.log(chalk.green(`\nI have already run '${pkgManager} install' for you, so go ahead and dive in.`));
  } catch (err) {
    spinner.error({ text: `${err}` });
  }
};

export default cloneTemplate;
