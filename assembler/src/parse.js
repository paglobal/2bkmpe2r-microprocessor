import parseToken from "./parseToken.js";
import processIdentifierToken from "./processIdentifierToken.js";
import processToken from "./processToken.js";

export default function parse(lexer) {
  const parsedTokens = [];
  const targetLocations = {};
  let instructionAddressOffset = 1;

  let nextToken = lexer.next();
  while (nextToken) {
    const parsedToken = parseToken(nextToken);
    const tokenType = parsedToken.tokenType;
    const tokenLine = parsedToken.tokenLine;
    const instructionAddress = tokenLine - instructionAddressOffset;
    parsedToken.instructionAddress = instructionAddress;

    switch (tokenType) {
      case "separator":
        break;

      case "newLine":
        break;

      case "label":
        const label = parsedToken.label;
        targetLocations[label] = tokenLine - 1;
        instructionAddressOffset += 1;
        break;

      case "registerIdentifier":
        processIdentifierToken(parsedTokens, parsedToken);
        break;

      default:
        processToken(parsedTokens, parsedToken);
        break;
    }

    nextToken = lexer.next();
  }

  const parseResult = {
    parsedTokens,
    targetLocations,
  };

  return parseResult;
}
