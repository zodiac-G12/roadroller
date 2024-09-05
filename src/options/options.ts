import type { LoadTestOptions } from "loadtest";
import { requestGenerator } from "./options-methods/request-generator.js";
import { statusCallback } from "./options-methods/status-callback.js";

const HTTP_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;
type HttpMethod = (typeof HTTP_METHODS)[number];
const isHttpMethod = (method: string): method is HttpMethod => {
  return ["GET", "POST", "PUT", "PATCH", "DELETE"].includes(method);
};

export const getOptions = (): LoadTestOptions => {
  const url = process.env.URL;
  const method = process.env.METHOD;
  const requestsPerSecond = Number(process.env.REQUESTS_PER_SECOND);
  const concurrency = Number(process.env.CONCURRENCY);
  const maxSeconds = Number(process.env.MAX_SECONDS);
  const maxRequests = Number(process.env.MAX_REQUESTS);

  if (url === undefined) {
    throw new Error("URL is not defined at the environment variables");
  }
  if (method === undefined || !isHttpMethod(method)) {
    throw new Error("HTTP Method is not defined at the environment variables");
  }
  if (requestsPerSecond === undefined || requestsPerSecond === 0) {
    throw new Error(
      "Requests per second is not defined at the environment variables",
    );
  }
  if (concurrency === undefined || concurrency === 0) {
    throw new Error("Concurrency is not defined at the environment variables");
  }
  if (maxSeconds === undefined || maxSeconds === 0) {
    throw new Error("Max seconds is not defined at the environment variables");
  }
  if (maxRequests === undefined || maxRequests === 0) {
    throw new Error("Max requests is not defined at the environment variables");
  }

  const options: LoadTestOptions = {
    url,
    method,
    requestsPerSecond,
    concurrency,
    maxSeconds,
    maxRequests,
    requestGenerator,
    statusCallback,
  };

  return options;
};
