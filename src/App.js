import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [formData, setFormData] = useState({
    projectKey: "",
    projectName: "",
    sourceEncoding: "",
    sources: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/generate-sonar-properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
      } else {
        console.log("Error generating file: " + data.message);
      }
    } catch (error) {
      console.error("Error generating file", error);
    }
  };

  return (
    <div>
      <h1>Generate sonar-project.properties</h1>
      <form onSubmit={handleSubmit} className="form">
          <input
          type="text"
          name="projectKey"
          placeholder="Project Key"
          value={formData.projectKey}
          onChange={handleChange}
          />
        <input
          type="text"
          name="projectName"
          placeholder="Project Name"
          value={formData.projectName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sourceEncoding"
          placeholder="Source Encoding"
          value={formData.sourceEncoding}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sources"
          placeholder="Sources"
          value={formData.sources}
          onChange={handleChange}
        />
        <button type="submit">Generate File</button>
      </form>
    </div>
  );
};

export default App;
