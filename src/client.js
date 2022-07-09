import { Connection, WorkflowClient } from '@temporalio/client';
import { example } from './workflows/index.js';
import { config } from "./constants/index.js"

async function run() {
  const connection = new Connection({});
  const client = new WorkflowClient(connection.service);

  // Invoke the `example` Workflow, only resolved when the workflow completes
  const result = await client.execute(example, {
    taskQueue: config.TASK_QUEUE,
    workflowId: config.WORK_FLOW_ID,
    args: ["YoYa!"]
  });
  console.log(result); // Hello, Temporal!
  await result;
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
