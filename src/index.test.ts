import { deepPick } from ".";

test("deepPick does something", () => {
  expect(deepPick({}, "")).toStrictEqual({});
});
