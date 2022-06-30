import parse from "./parse.js";
import compile from "./compile.js";

export default function assemble(lexer) {
  const parseResult = parse(lexer);
  const compilationResult = compile(parseResult);
  const machineCodeInstructions = compilationResult;

  return machineCodeInstructions;
}
