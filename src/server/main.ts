import express from "express";
import ViteExpress from "vite-express";
import "dotenv/config"

const app = express();
const port = process.env.PORT

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port " + port)
);
