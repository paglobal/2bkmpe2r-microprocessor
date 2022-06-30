import { zeroExtend } from "./digitManipulations.js";
import completeCompilation from "./completeCompilation.js";

export default function compile00(parsedToken) {
  const type = parsedToken.instructionType.type;
  const s1 = zeroExtend(parsedToken.registerIdentifier.s1_s2_d1[0], 4);
  const s2 = zeroExtend(parsedToken.registerIdentifier.s1_s2_d1[1], 4);
  const d1 = zeroExtend(parsedToken.registerIdentifier.s1_s2_d1[2], 4);
  const op = zeroExtend(parsedToken.instructionType.op, 12);
  const binaryInstructionString = type + s1 + s2 + d1 + op;
  const hexInstructionString =
    completeCompilation(binaryInstructionString) + "\n";

  return hexInstructionString;
}
