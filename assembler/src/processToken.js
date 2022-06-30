export default function processToken(parsedTokens, parsedToken) {
  if (parsedTokens[parsedToken.tokenLine - 1]) {
    parsedTokens[parsedToken.tokenLine - 1][parsedToken.tokenType] =
      parsedToken;
  } else {
    parsedTokens[parsedToken.tokenLine - 1] = {};
    parsedTokens[parsedToken.tokenLine - 1][parsedToken.tokenType] =
      parsedToken;
  }
}
