var express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/download", (req, res) => {
  const filePath = __dirname + "/public/assets/" + req.params.filename;
  res.download(filePath, "GAIA Platform_1.1.0_x64_en-US.msi", (err) => {
    if (err) {
      res.send({
        error: err,
        msg: "Problem downloading the file",
      });
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
