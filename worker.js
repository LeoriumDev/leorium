import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();
app.get('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));
app.use("/*", serveStatic({ root: "./public" }));

export default app;
