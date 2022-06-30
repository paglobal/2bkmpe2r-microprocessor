import { zeroExtend, binaryToHex } from "./digitManipulations.js";

export default function completeCompilation(binaryInstructionString) {
  const extendedBinaryInstructionString = zeroExtend(
    binaryInstructionString,
    28
  );

  let hexInstructionString = "";
  for (let i = 0; i < extendedBinaryInstructionString.length; i += 4) {
    hexInstructionString += binaryToHex(
      extendedBinaryInstructionString.slice(i, i + 4)
    );
  }

  return hexInstructionString;
}
