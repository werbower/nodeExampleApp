import { config } from "dotenv"
import { vi, beforeEach } from "vitest"


config({path: '.env.test'})

beforeEach(() => {
  vi.clearAllMocks();
});