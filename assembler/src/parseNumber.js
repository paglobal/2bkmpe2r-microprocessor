import { decimalToBinary2sComplement } from "./digitManipulations.js";

export default function parseNumber(token) {
  const tokenValue = token.value;
  const parsedResult = {
    num: decimalToBinary2sComplement(tokenValue),
  };

  return parsedResult;
}
