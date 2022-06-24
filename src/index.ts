/**
 * A string enumeration of command file extensions.
 *
 * @see https://www.typescriptlang.org/docs/handbook/enums.html#string-enums
 */
export enum Extensions {
  CommonJS = "cjs",
  ECMAScriptModule = "mjs",
  JavaScript = "js",
  JSON = "json",
  JSX = "jsx",
  Node = "node",
  TypeScript = "ts",
  TypeScript_JSX = "tsx",
  WebAssemblyBinary = "wasm",
}

/**
 * An iterable list of file extensions commonly used by EcmaScript projects, in
 * order of preference.
 *
 * For flexibility, this list DOES NOT include the preceding full stop (period)
 * character.
 */
export const ECMA_EXTENSIONS = [
  Extensions.TypeScript,
  Extensions.TypeScript_JSX,
  Extensions.ECMAScriptModule,
  Extensions.JavaScript,
  Extensions.JSX,
  Extensions.CommonJS,
];

export const NODE_SHEBANG = "#!/usr/bin/env node";
