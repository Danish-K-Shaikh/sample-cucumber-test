// export default {
//   requireModule: ["ts-node/register"],
//   require: ["./steps/**/*.ts"],
//   paths: ["./features/*.feature"],
// };
export default {
  requireModule: ["ts-node/register"],
  require: ["./steps/**/*.ts"],
  paths: ["./features/*.feature"],
  // format: [
  //   "json:./reports/cucumber-report.json", // JSON reporter for detailed info
  //   "pretty", // Pretty format in the console
  //   "node_modules/cucumber-console-logger", // Custom console logger (optional)
  // ],
  // Enable logging of hooks or specific tags if required
  snippets: false,
};