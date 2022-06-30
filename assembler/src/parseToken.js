import parseInstructionType from "./parseInstructionType.js";
import parseNumber from "./parseNumber.js";
import parseRegisterIdentifier from "./parseRegisterIdentifier.js";
import parseMemoryCellIdentifier from "./parseMemoryCellIdentifier.js";

export default function parseToken(token) {
  const tokenType = token.type;
  const tokenLine = token.line;
  const tokenValue = token.value;

  let parsedToken = {
    tokenType,
    tokenLine,
  };

  switch (tokenType) {
    case "instructionType":
      parsedToken = { ...parsedToken, ...parseInstructionType(token) };
      break;

    case "number":
      parsedToken = { ...parsedToken, ...parseNumber(token) };
      break;

    case "label":
      //remove colon from label
      const label = tokenValue.slice(0, -1);
      parsedToken = { ...parsedToken, label };
      break;

    case "registerIdentifier":
      parsedToken = { ...parsedToken, ...parseRegisterIdentifier(token) };
      break;

    case "memoryCellIdentifier":
      parsedToken = { ...parsedToken, ...parseMemoryCellIdentifier(token) };
      break;

    case "labelIdentifier":
      parsedToken = { ...parsedToken, target: tokenValue };
      break;

    default:
      break;
  }

  return parsedToken;
}
