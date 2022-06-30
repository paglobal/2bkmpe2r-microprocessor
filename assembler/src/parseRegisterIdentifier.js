import { decimalToBinary2sComplement } from "./digitManipulations.js";

export default function parseRegisterIdentifier(token) {
  const tokenValue = token.value;

  //remove "r" from registerIdentifier decimal string
  const decimalString = tokenValue.slice(1);

  let binaryString = decimalToBinary2sComplement(decimalString);

  //remove leading zero from registerIdentifier binary string
  binaryString = binaryString.slice(1);

  const parsedResult = {
    s1_s2_d1: binaryString,
  };

  return parsedResult;
}
