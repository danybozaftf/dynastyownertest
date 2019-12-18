import Express from "express";

const app = Express();

app.get("/commits", (req, res) => {
  res.send("It should output commits");
});

app.listen(3000, () => {
  console.log("App runing in port 3000");
});
