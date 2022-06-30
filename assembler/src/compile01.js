import { zeroExtend, signExtend } from "./digitManipulations.js";
import completeCompilation from "./completeCompilation.js";

export default function compile01(parsedToken) {
  const type = parsedToken.instructionType.type;
  const s1 = zeroExtend(parsedToken.registerIdentifier.s1_s2_d1[0], 4);
  const s2 = zeroExtend(parsedToken.registerIdentifier.s1_s2_d1[1], 4);
  const offset = signExtend(parsedToken.labelIdentifier.offset, 12);
  const op = zeroExtend(parsedToken.instructionType.op, 4);
  const binaryInstructionString = type + s1 + s2 + offset + op;
  const hexInstructionString =
    completeCompilation(binaryInstructionString) + "\n";

  return hexInstructionString;
}
