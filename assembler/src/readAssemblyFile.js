import { readFileSync } from "fs";

export default function readAssemblyFile(fileName) {
  let assemblyInstructions;

  try {
    assemblyInstructions = readFileSync(fileName, "utf8");
    console.log("File read: " + fileName);
  } catch (err) {
    console.log(err);
  }

  return assemblyInstructions;
}
