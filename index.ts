import { serve } from "bun";
import homepage from "./src/index.html";

const server = serve({
  port: 3000,
  routes: {
    "/": homepage,
  },
  development: true,
});

console.log("server running on http://localhost:3000");
