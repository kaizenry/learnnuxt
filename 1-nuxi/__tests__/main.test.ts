import { describe, test, expect } from "vitest";
import { readFileSync } from "fs";

describe("nuxi command tests", async () => {
  test("dev script modified", () => {
    const pkg = readFileSync("./package.json", "utf-8");
    const js = JSON.parse(pkg);
    expect(js.scripts.dev).toContain("--dotenv .env.local");
  });

  test("nuxi generated files", async () => {
    const page = readFileSync("./pages/index.vue", "utf-8");
    const component = readFileSync("./components/Button.vue", "utf-8");
    expect(page).toContain("<h1>Hello");
    expect(component).toContain("<button>Click");
  });
});
