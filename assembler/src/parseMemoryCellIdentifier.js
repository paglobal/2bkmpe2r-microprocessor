import { decimalToBinary2sComplement } from "./digitManipulations.js";

export default function parseMemoryCellIdentifier(token) {
  const tokenValue = token.value;

  //remove "m" from memoryCellIdentifier decimal string
  const decimalString = tokenValue.slice(1);

  let binaryString = decimalToBinary2sComplement(decimalString);

  //remove leading zero from memoryCellIdentifier binary string
  binaryString = binaryString.slice(1);

  const parsedResult = {
    l1: binaryString,
  };

  return parsedResult;
}
