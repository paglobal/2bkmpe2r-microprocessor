export default function processIdentifierToken(parsedTokens, parsedToken) {
  if (parsedTokens[parsedToken.tokenLine - 1]) {
    if (parsedTokens[parsedToken.tokenLine - 1].registerIdentifier) {
      parsedTokens[parsedToken.tokenLine - 1].registerIdentifier.s1_s2_d1.push(
        parsedToken.s1_s2_d1
      );
    } else {
      parsedTokens[parsedToken.tokenLine - 1].registerIdentifier = {
        ...parsedToken,
        s1_s2_d1: [parsedToken.s1_s2_d1],
      };
    }
  } else {
    parsedTokens[parsedToken.tokenLine - 1] = {};
    parsedTokens[parsedToken.tokenLine - 1].registerIdentifier = {
      ...parsedToken,
      s1_s2_d1: [parsedToken.s1_s2_d1],
    };
  }
}
