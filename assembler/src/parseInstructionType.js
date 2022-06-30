import instructionTypeDictionary from "./instructionTypeDictionary.js";

export default function parseInstructionType(token) {
  const tokenValue = token.value;
  const parsedResult = instructionTypeDictionary[tokenValue];

  return parsedResult;
}
