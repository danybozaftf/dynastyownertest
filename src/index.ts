import Express from "express";
import { getCommits } from "./handlers";
const app = Express();

app.get("/commits", getCommits);

app.listen(3000, () => {
  console.log("App runing in port 3000");
});
