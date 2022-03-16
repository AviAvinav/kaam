import * as shell from 'shelljs';
import { createSpinner } from 'nanospinner';

const createPrettierConfig = async (name: string) => {
  const spinner = createSpinner('Generating project...').start();
  await new Promise((resolve) => { setTimeout(resolve, 1000); });

  try {
    shell.exec(`cd ${name} && npx degit github:AviAvinav/kaam/content/prettier#v1.2.0-alpha`, { silent: true });
    await new Promise((resolve) => { setTimeout(resolve, 1000); });
    spinner.success({ text: 'Added Prettier Config! 🔥' });
  } catch (err) {
    spinner.error({ text: `${err}` });
  }
};

export default createPrettierConfig;
