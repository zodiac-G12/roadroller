import type { LoadTestOptions } from "loadtest";

export const statusCallback: LoadTestOptions["statusCallback"] = (
  error: Error,
  // biome-ignore lint: no-explicit-any
  result: any,
  latency: loadtest.LoadTestResult,
) => {
  if (latency) {
    const message = `Progress: [Requests ${latency.totalRequests}, RPS ${latency.rps}, Latency ${latency.meanLatencyMs}ms, TotalErrors ${latency.totalErrors}]`;
    console.info(message);
  }

  if (error) {
    console.error("Error:", error);
  }

  if (result && process.env.IS_SHOW_RESPONSE_LOG === "true") {
    console.info("Result:", result);
  }
};
