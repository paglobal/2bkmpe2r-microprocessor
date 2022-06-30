export function binaryToHex(binaryString) {
  let binaryNumber = parseInt(binaryString, 2);
  let hexString = binaryNumber.toString(16);

  return hexString;
}

function flipbits(binaryString) {
  return binaryString
    .split("")
    .map((b) => (1 - b).toString())
    .join("");
}

export function decimalToBinary2sComplement(decimalString) {
  let decimalNumber = parseInt(decimalString, 10);
  let binary2sComplementString;

  if (decimalNumber < 0) {
    decimalNumber = Math.abs(decimalNumber);
    let binaryString = decimalNumber.toString(2);
    let tempBinary2sComplementString = flipbits(binaryString);
    tempBinary2sComplementString = "1" + tempBinary2sComplementString;
    decimalNumber = parseInt(tempBinary2sComplementString, 2);
    decimalNumber++;
    binary2sComplementString = decimalNumber.toString(2);
  } else {
    binary2sComplementString = decimalNumber.toString(2);
    binary2sComplementString = "0" + binary2sComplementString;
  }

  return binary2sComplementString;
}

export function zeroExtend(binaryString, extendedSize) {
  while (binaryString.length < extendedSize) {
    binaryString = "0" + binaryString;
  }

  return binaryString;
}

export function signExtend(binary2sComplementString, extendedSize) {
  const sign = binary2sComplementString[0] === "1" ? "1" : "0";
  while (binary2sComplementString.length < extendedSize) {
    binary2sComplementString = sign + binary2sComplementString;
  }

  return binary2sComplementString;
}
