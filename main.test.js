import { isOddNumber } from "./main.js";
const expect = chai.expect;

describe("function isOddNumber()", () => {
  it("should be true if 3", () => {
    const result = isOddNumber(3);
    expect(result).to.true;
  });

  it("should be false if 2", () => {
    const result = isOddNumber(2);
    expect(result).to.false;
  });
});
