import * as index from "../index";

describe("index", () => {
  test.each(["ECMA_EXTENSIONS", "Extensions", "NODE_SHEBANG"])(
    "it provides a named export: `%s`",
    (exportName) => {
      expect(index[exportName]).toBeDefined();
    }
  );
});
