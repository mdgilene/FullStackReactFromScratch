import express from "express";
import path from "path";
import config from "config";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(config.PORT, () =>
  console.log(`Server listening on port ${config.PORT}...`)
);
