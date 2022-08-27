import axios from "axios";
import React, { useState } from "react";
import "./CAddProjects.css";

const CAddProjects = () => {
  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [experience, setExperience] = useState("");
  const [client, setClient] = useState(localStorage.client);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://freelancingappbackend.herokuapp.com/api/client/addproject",
        {
          title,
          skills,
          location,
          price,
          experience,
          client,
          description,
        }
      );
      alert("Project submitted successfully!");
      window.location.href = "/client/home";
      setTitle("");
      setSkills("");
      setLocation("");
      setPrice("");
      setExperience("");
      setDescription("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="c-addprojects">
      <label>
        Title <span style={{ color: "red" }}>*</span>
      </label>
      <br />
      <input
        className="cl-add-input"
        type="text"
        placeholder="Enter project title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br />

      <label>
        Skills <span style={{ color: "red" }}>*</span>
      </label>
      <br />
      <input
        className="cl-add-input"
        type="text"
        placeholder="Enter project skills"
        onChange={(e) => setSkills(e.target.value)}
        value={skills}
      />
      <br />

      <label>
        Location <span style={{ color: "red" }}>*</span>
      </label>
      <br />
      <input
        className="cl-add-input"
        type="text"
        placeholder="Enter preferred location"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <br />

      <label>
        Price <span style={{ color: "red" }}>*</span>
      </label>
      <br />
      <input
        className="cl-add-input"
        type="text"
        placeholder="Enter price in $"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <br />

      <label>
        Experience <span style={{ color: "red" }}>*</span>
      </label>
      <br />
      <input
        className="cl-add-input"
        type="text"
        placeholder="Enter years of experience"
        onChange={(e) => setExperience(e.target.value)}
        value={experience}
      />
      <br />

      <label>
        Client Name <span style={{ color: "red" }}>*</span>
      </label>
      <br />
      <input
        className="cl-add-input"
        type="text"
        placeholder="Enter client name"
        defaultValue={localStorage.client}
      />
      <br />

      <label>
        Description <span style={{ color: "red" }}>*</span>
      </label>
      <br />
      <textarea
        className="cl-add-input"
        type="text"
        placeholder="Enter project description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <br />

      <button className="h-buttons s-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CAddProjects;
