import * as path from "path";

import { runTests } from "@vscode/test-electron";

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, "../../");

    // The path to test runner
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, "./suite/index");

    const testWorkspace = path.resolve(
      __dirname,
      "../../test-fixtures/workspace"
    );

    // Download VS Code, unzip it and run the integration test
    // (latest version)
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: [
        testWorkspace,
        // This disables all extensions except the one being tested
        "--disable-extensions",
      ],
    });

    // Download VS Code, unzip it and run the integration test
    // (version 1.64.0 / Jan 2022)
    await runTests({
      version: "1.64.0",
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: [
        testWorkspace,
        // This disables all extensions except the one being tested
        "--disable-extensions",
      ],
    });
  } catch (err) {
    console.error("Failed to run tests");
    process.exit(1);
  }
}

main();
