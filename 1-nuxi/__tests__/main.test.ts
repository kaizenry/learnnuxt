import { describe, test, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";
import { readFileSync } from "fs";

describe("nuxi command tests", async () => {
  await setup({
    configFile: "./nuxt.config.ts",
  });

  test("dev script modified", () => {
    const pkg = readFileSync("./package.json", "utf-8");
    const js = JSON.parse(pkg);
    expect(js.scripts.dev).toContain("--dotenv .env.local");
  });

  test("nuxi generated files", async () => {
    const response = await $fetch("/");
    expect(response).toContain("<h1>Hello");
    expect(response).toContain("<button>Click");
  });
});
