import moo from "moo";
import readAssemblyFile from "./src/readAssemblyFile.js";
import assemble from "./src/assemble.js";
import writeMachineCodeFile from "./src/writeMachineCodeFile.js";

let lexer = moo.compile({
  separator: /[ \t]+|,[ \t]+|,/,
  instructionType: [
    "sum",
    "diff",
    "prod",
    "qout",
    "and",
    "or",
    "not",
    "beq",
    "bne",
    "bgt",
    "blt",
    "jmp",
    "lc",
    "ld",
    "sd",
  ],
  number: /0|-?[1-9][0-9]*/,
  label: /[a-z0-9]+:/,
  registerIdentifier: /r0|r[1-9][0-9]*/,
  memoryCellIdentifier: /m0|m[1-9][0-9]*/,
  labelIdentifier: /[a-z0-9]+/,
  newLine: { match: "\n", lineBreaks: true },
});

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log("Usage: node " + process.argv[1] + " FILENAME");
  process.exit(1);
}

// Read the file and print its contents.
const fileName = process.argv[2];

const assemblyInstructions = readAssemblyFile(fileName);
lexer.reset(assemblyInstructions);
const machineCodeInstructions = assemble(lexer);
writeMachineCodeFile(
  fileName.replace(/\.[^/.]+$/, ""),
  machineCodeInstructions
);
