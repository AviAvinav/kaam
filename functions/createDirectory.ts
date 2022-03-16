/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import * as fs from 'fs';
import * as chalk from 'chalk';

const createDirectory = (targetPath: string) => {
  if (fs.existsSync(targetPath)) {
    console.log(
      chalk.redBright(
        'A directory with the same name as the project already exists. Please use another name or delete the directory.',
      ),
    );
    return false;
  }
  fs.mkdirSync(targetPath);
  return true;
};

export default createDirectory;
