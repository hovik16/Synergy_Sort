import { describe, it, expect } from "vitest";
import { buildCountsArray } from "./quizEngine.js";

describe("buildCountsArray", () => {
  it("counts 14 randonm answers", () => {
    const answers = ['A', 'C', 'D', 'B', 'B', 'C', 'B', 'D', 'A', 'B', 'C', 'C', 'D', 'A'];
    expect(buildCountsArray(answers)).toEqual([3,4,4,3]);
  });

  it("counts 14 A's", () => {
    const answers = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'];
    expect(buildCountsArray(answers)).toEqual([14,0,0,0]);
  });

  it("counts 14 B's", () => {
    const answers = ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'];
    expect(buildCountsArray(answers)).toEqual([0,14,0,0]);
  });

  it("counts 14 C's", () => {
    const answers = ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'];
    expect(buildCountsArray(answers)).toEqual([0,0,14,0]);
  });

  it("counts 14 D's", () => {
    const answers = ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D'];
    expect(buildCountsArray(answers)).toEqual([0,0,0,14]);
  });

  it("handles empty/null answers safely", () => {
    const answers = ["A", null, "B", undefined, "D"];
    expect(buildCountsArray(answers)).toEqual([1,1,0,1]);
  });
});