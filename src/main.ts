import "dotenv/config";
import type { LoadTestResult } from "loadtest";
import { loadTest } from "loadtest";
import { getOptions } from "./options/options.js";

const options = getOptions();

loadTest(options, (error: Error, result: LoadTestResult) => {
  if (error) {
    console.error("Got an error:", error);

    return;
  }
  console.log("Summary:", result);
  console.log("Tests run successfully");
});
