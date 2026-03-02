import { describe, it, expect } from "vitest";
import { buildCountsArray } from "./quizEngine.js";

describe("buildCountsArray", () => {
  it("counts A/B/C/D in order", () => {
    const answers = ["A","B","A","D","C","A"];
    expect(buildCountsArray(answers)).toEqual([3,1,1,1]);
  });

  it("handles empty/null answers safely", () => {
    const answers = ["A", null, "B", undefined, "D"];
    expect(buildCountsArray(answers)).toEqual([1,1,0,1]);
  });
});