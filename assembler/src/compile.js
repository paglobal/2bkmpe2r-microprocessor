import compile00 from "./compile00.js";
import compile01 from "./compile01.js";
import compile10 from "./compile10.js";
import { decimalToBinary2sComplement } from "./digitManipulations.js";

export default function compile(parseResult) {
  const parsedTokens = parseResult.parsedTokens;
  const targetLocations = parseResult.targetLocations;
  let compilationResult = "";

  parsedTokens.forEach((parsedToken) => {
    const type = parsedToken.instructionType.type;

    switch (type) {
      case "00":
        compilationResult += compile00(parsedToken);
        break;

      case "01":
        let offset =
          targetLocations[parsedToken.labelIdentifier.target] -
          (parsedToken.labelIdentifier.instructionAddress + 1);
        console.log(targetLocations[parsedToken.labelIdentifier.target]);
        console.log(parsedToken.labelIdentifier.instructionAddress);
        console.log(offset);
        offset = decimalToBinary2sComplement(offset);
        parsedToken.labelIdentifier.offset = offset;

        compilationResult += compile01(parsedToken);
        break;

      case "10":
        if (parsedToken.instructionType.op === "000") {
          let target = targetLocations[parsedToken.labelIdentifier.target];
          target = decimalToBinary2sComplement(target);
          parsedToken.labelIdentifier.target = target;
        }

        compilationResult += compile10(parsedToken);
        break;

      default:
        break;
    }
  });

  return compilationResult;
}
