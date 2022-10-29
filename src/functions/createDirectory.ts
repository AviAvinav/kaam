import { redBright } from "colorette";
import * as fs from "fs";
import * as inquirer from "inquirer";

const createDirectory = (targetPath: string) => {
  let rerun = false;
  if (fs.existsSync(targetPath)) {
    console.log(
      redBright(
        "A directory with the same name as the project already exists. Please use another name or delete the directory."
      )
    );

    inquirer
      .prompt([
        {
          name: "rerun",
          type: "confirm",
          message: "Would you like to retry?",
          choices: ["yes", "no"],
        },
      ])
      .then((answers) => {
        rerun = answers["rerun"] === "yes" ? true : false;
      });
    return {
      success: false,
      rerun,
    };
  }

  fs.mkdirSync(targetPath);
  return {
    success: true,
    rerun,
  };
};

export default createDirectory;
