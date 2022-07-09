import { sleep } from "@temporalio/workflow";

export async function checkRepeatedly(period, action) {
  // Note: we use a "busy" poll inside the Workflow here for simplicity, which is fine for a daily poll.
  // However, more frequent polls should poll using a server side retry or a long running activity: 
  // https://community.temporal.io/t/what-is-the-best-practice-for-a-polling-activity/328
  while (true) {
    console.log(`Waiting ${period}...`);
    await sleep(period);
    console.log("Trying again.");

    const result = await action();
    if (result !== undefined) {
      console.log("Got a result", result);
      return result;
    }
  }
}