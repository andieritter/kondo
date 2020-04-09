const express = require("express");
const path = require("path");
const scriptController = require("./controllers/scriptController");
const heapController = require("./controllers/heapController");
const app = express();
const PORT = 8001;

// *** ERROR HANDLING *** //
function logErrors(err, req, res, next) {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
}

// *** SERVER ROUTES *** //
app.use(express.json());

app.use("/assets", express.static(path.join(__dirname, "../assets")));

// app.post("/code", scriptController.storeScript, /*heapController.postHeap,*/(req, res) => {
//   res.status(200).send("OK");
//   process.exit(0);
// }
// );

app.get("/data", heapController.getData, (req, res) => {
  res.json(res.locals);
  process.exit(0);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// app.post;
