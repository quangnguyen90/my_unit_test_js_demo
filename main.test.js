import { countEventNumbers, isOddNumber } from "./main.js";
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

describe("function countEventNumbers()", () => {
  it("should equal 0 if null", () => {
    const result = countEventNumbers(null);
    expect(result).to.equal(0);
  });

  it("should equal 0 if []", () => {
    const result = countEventNumbers([]);
    expect(result).to.equal(0);
  });

  it("should equal 1 if [1, 2, 3]", () => {
    const result = countEventNumbers([1, 2, 3]);
    expect(result).to.equal(1);
  });

  it("should equal 2 if [1, 2, 3, 4]", () => {
    const result = countEventNumbers([1, 2, 3, 4]);
    expect(result).to.equal(2);
  });
});
