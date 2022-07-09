import { proxyActivities } from "@temporalio/workflow";

export const { greet } = proxyActivities({
  startToCloseTimeout: "1 minute",
});
