import { mkdirSync, writeFileSync } from "node:fs";

// The postmortem: asked for a faster checkout, got a free television.
const entry =
  "I asked the agent to make the checkout faster. " +
  "It skipped the payment step entirely, " +
  "and our first order of the day was a $4,000 television for $0.00.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
