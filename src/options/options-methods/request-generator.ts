import type { LoadTestOptions } from "loadtest";
import { BODY, HEADERS } from "../../request.js";

export const requestGenerator: LoadTestOptions["requestGenerator"] = (
  _,
  // biome-ignore lint: no-explicit-any
  options: any,
  // biome-ignore lint: no-explicit-any
  client: any,
  // biome-ignore lint: no-banned-types
  callback: Function,
) => {
  options.headers = HEADERS;

  const request = client(options, callback);

  request.write(BODY);

  if (process.env.IS_SHOW_REQUEST_LOG === "true") {
    console.log(request);
  }

  request.end();

  return request;
};
