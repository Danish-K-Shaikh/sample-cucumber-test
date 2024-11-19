import { When } from "@cucumber/cucumber";

When("Foo Step to execute", async function () {
  console.log("Foo");
});
When("something", async function () {});
When("Bar Step to execute", async function () {});
When("Step to execute", async function () {});
When("I fill form with following details", function (_dataTable: any) {});
// When(
//   "I login with username {string} and password {password} with {entity} entity",
//   async function (username, password, entity) {}
// );
When("I select row number {int}", async function (number: Number) {});
// Position {filePath, row}
// Parameters[]{index: int, length: int}
// arguments: string[]

// project_name branch commit last_scanned
// Tag position[] projectId featureId[] scenarioId[]
// Feature projectId position scenarioId[]
// Scenario featureId position projectId examples[][]
//
// Step position active parameters[] arguments scenarioId
// StepFunction projectId
