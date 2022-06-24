import { babel } from "@rollup/plugin-babel";
import { createRequire } from "module";

export default () => {
  const require = createRequire(import.meta.url);
  const pkg = require("./package.json");
  const { exports } = pkg;

  return {
    input: "./src/index.ts",
    output: [
      {
        file: exports.require,
        format: "cjs",
      },
      {
        file: exports.import,
        format: "es",
      },
    ],
    plugins: [babel({ babelHelpers: "runtime", extensions: ["ts"] })],
  };
};
