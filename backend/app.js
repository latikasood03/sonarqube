const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sonarRoute = require("./routes/sonar");

const app = express();
const PORT = 8080;

app.use(cors());

app.use(bodyParser.json());
  
app.use(sonarRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
