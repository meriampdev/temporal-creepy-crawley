import { continueAsNew } from "@temporalio/workflow";
import { config } from "../constants/index.js";
import { checkRepeatedly } from "../utils/repeats.js";
import { greet } from "./activities.js";

/** A workflow that simply calls an activity */
export async function example(name) {
  await Promise.race([
    checkRepeatedly(config.INTERVAL, async () => {
      return await greet(name);
    })
  ])

  await continueAsNew("THIS IS NEW!");
}
