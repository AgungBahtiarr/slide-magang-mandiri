import homepage from "./src/index.html";

Bun.serve({
  port: 3000,
  routes: {
    "/": homepage,
  },
  development: true,
});

console.log("server running on http://localhost:3000");
