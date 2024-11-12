const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/generate-sonar-properties", (req, res) => {
  const data = req.body;

  const properties = `
    sonar.projectKey=${data.projectKey}
    sonar.projectName=${data.projectName}
    sonar.sourceEncoding=${data.sourceEncoding}
    sonar.sources=${data.sources}
  `

  fs.writeFile('sonar-project.properties', properties, (err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to generate file" });
    }
    res.json({ message: "File generated successfully"});
  });
});

module.exports = router;
