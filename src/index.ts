import express from "express";

const app = express();
const port = 3001;

app.get("/", (_, res) => {
  res.send("running");
});

app.listen(port, () => console.log(`Ready on http://localhost:${port}`));
