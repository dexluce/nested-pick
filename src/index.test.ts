import { nestedPick } from ".";

const obj = {
  a: 1,
  b: { c: 2, d: 3 },
  e: [4, 5, 6],
  f: { g: { h: 7, i: 8 }, k: 9 },
  l: [10, { m: 11, n: [12, { o: 13, p: 14, r: 15 }, 16], s: 17 }, 18],
  ".t": {
    "u.": ".19",
    ".v.": "20",
    ".w.w.": "2.1",
    "x][x": "2[]2",
    "[y]": "[2.3.4]",
    "[z.": "[2.5]",
  },
};

test("simple pick", () => {
  expect(nestedPick(obj, "a")).toStrictEqual({ a: 1 });
  expect(nestedPick(obj, "b")).toStrictEqual({ b: { c: 2, d: 3 } });
  expect(nestedPick(obj, "e")).toStrictEqual({
    e: [4, 5, 6],
  });
});

test("nested pick", () => {
  expect(nestedPick(obj, "b.c")).toStrictEqual({ b: { c: 2 } });
  expect(nestedPick(obj, "b.d")).toStrictEqual({ b: { d: 3 } });
  expect(nestedPick(obj, "f.g.h")).toStrictEqual({ f: { g: { h: 7 } } });
});

test("multiple pick", () => {
  expect(nestedPick(obj, ["a", "b.c", "f.g.h"])).toStrictEqual({
    a: 1,
    b: { c: 2 },
    f: { g: { h: 7 } },
  });
});

test("array pick", () => {
  expect(nestedPick(obj, "e[0]")).toStrictEqual({ e: [4] });
  expect(nestedPick(obj, ["e[1]", "l[0]"])).toStrictEqual({
    e: [undefined, 5],
    l: [10],
  });
});

test("deep array pick", () => {
  expect(nestedPick(obj, "l[1].n[1]")).toStrictEqual({
    l: [undefined, { n: [undefined, { o: 13, p: 14, r: 15 }] }],
  });
  expect(nestedPick(obj, "l[1].n[1].o")).toStrictEqual({
    l: [undefined, { n: [undefined, { o: 13 }] }],
  });
  expect(nestedPick(obj, "l[1].n[1].p")).toStrictEqual({
    l: [undefined, { n: [undefined, { p: 14 }] }],
  });
});

test("special characters pick", () => {
  expect(nestedPick(obj, ".t")).toStrictEqual({
    ".t": {
      "u.": ".19",
      ".v.": "20",
      ".w.w.": "2.1",
      "x][x": "2[]2",
      "[y]": "[2.3.4]",
      "[z.": "[2.5]",
    },
  });
  expect(nestedPick(obj, ".t.u.")).toStrictEqual({ ".t": { "u.": ".19" } });
  expect(nestedPick(obj, ".t..v.")).toStrictEqual({ ".t": { ".v.": "20" } });
  expect(nestedPick(obj, ".t..w.w.")).toStrictEqual({
    ".t": { ".w.w.": "2.1" },
  });
  expect(nestedPick(obj, ".t.x][x")).toStrictEqual({
    ".t": { "x][x": "2[]2" },
  });
  expect(nestedPick(obj, ".t.[y]")).toStrictEqual({
    ".t": { "[y]": "[2.3.4]" },
  });
  expect(nestedPick(obj, ".t.[z.")).toStrictEqual({ ".t": { "[z.": "[2.5]" } });
});
