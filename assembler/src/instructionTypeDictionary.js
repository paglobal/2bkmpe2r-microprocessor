const instructionTypeDictionary = {
  sum: {
    type: "00",
    op: "000",
  },
  diff: {
    type: "00",
    op: "001",
  },
  prod: {
    type: "00",
    op: "010",
  },
  quot: {
    type: "00",
    op: "011",
  },
  and: {
    type: "00",
    op: "100",
  },
  or: {
    type: "00",
    op: "101",
  },
  not: {
    type: "00",
    op: "110",
  },
  beq: {
    type: "01",
    op: "000",
  },
  bne: {
    type: "01",
    op: "001",
  },
  bgt: {
    type: "01",
    op: "010",
  },
  blt: {
    type: "01",
    op: "011",
  },
  jmp: {
    type: "10",
    op: "000",
  },
  lc: {
    type: "10",
    op: "001",
  },
  ld: {
    type: "10",
    op: "010",
  },
  sd: {
    type: "10",
    op: "011",
  },
};

export default instructionTypeDictionary;
