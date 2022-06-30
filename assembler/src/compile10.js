import { zeroExtend, signExtend } from "./digitManipulations.js";
import completeCompilation from "./completeCompilation.js";

export default function compile10(parsedToken) {
  const type = parsedToken.instructionType.type;

  const s1_d1 =
    parsedToken.instructionType.op === "000"
      ? "0000"
      : zeroExtend(parsedToken.registerIdentifier.s1_s2_d1[0], 4);

  let num_target_l1;
  if (parsedToken.number) {
    num_target_l1 = signExtend(parsedToken.number.num, 16);
  } else if (parsedToken.labelIdentifier) {
    num_target_l1 = zeroExtend(parsedToken.labelIdentifier.target, 16);
  } else if (parsedToken.memoryCellIdentifier) {
    num_target_l1 = zeroExtend(parsedToken.memoryCellIdentifier.l1, 16);
  }

  const op = zeroExtend(parsedToken.instructionType.op, 4);

  const binaryInstructionString = type + s1_d1 + num_target_l1 + op;

  const hexInstructionString =
    completeCompilation(binaryInstructionString) + "\n";

  return hexInstructionString;
}
