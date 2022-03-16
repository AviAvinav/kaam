/* eslint-disable no-console */
import shell from 'shelljs';

const cloneTemplate = (template: string, name: string) => {
  shell.exec(`cd ${name} && npx degit github:AviAvinav/nooli/templates/${template} && yarn install`, { silent: true });
  console.log('Done');
};

export default cloneTemplate;
