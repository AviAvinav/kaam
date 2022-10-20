import * as shell from "shelljs";
import { createSpinner } from "nanospinner";
import * as chalk from "chalk";

import { pkgManagerType, templateType } from "../types";

const cloneTemplate = async (
  template: templateType,
  name: string,
  pkgManager: pkgManagerType
) => {
  const spinner = createSpinner("Generating project...").start();
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    shell.exec(
      `cd ${name} && npx degit github:AviAvinav/kaam/templates/${template} && ${pkgManager} install`,
      { silent: true }
    );
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    spinner.success({ text: "Project generated successfully! 🚀 🚀 🚀" });
    console.log(
      chalk.green(
        `\nI have already run '${pkgManager} install' for you, so go ahead and dive in.`
      )
    );
  } catch (err) {
    spinner.error({ text: `${err}` });
  }
};

export default cloneTemplate;
