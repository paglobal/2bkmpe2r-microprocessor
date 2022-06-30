import { writeFile } from "fs";

export default function writeMachineCodeFile(
  fileName,
  machineCodeInstructions
) {
  const fileContents = "v2.0 raw\n" + machineCodeInstructions;
  writeFile(`${fileName}.txt`, fileContents, function (err) {
    if (err) return console.log(err);
    console.log("File written: " + fileName + ".txt");
  });
}
