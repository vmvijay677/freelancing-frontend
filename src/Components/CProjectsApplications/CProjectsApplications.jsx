import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CProjectsApplications.css";

const CProjectsApplications = () => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const res = await axios.get(
          "https://freelancingappbackend.herokuapp.com/api/client/projects"
        );
        setProjectsList(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    handleSubmit();
  }, []);

  return (
    <div className="c-projects-app">
      {projectsList.map((item, index) => (
        <div className="c-projects-mini" key={index}>
          <p>Title: {item.title}</p>
          <p>Skills: {item.skills}</p>
          <p>Location: {item.location}</p>
          <p>Price: ${item.price}</p>
          <p>Experience: {item.experience} years</p>
          <p>Client Name: {item.client}</p>
          <p>Description: {item.description}</p>
          <p style={{ color: "gray", textAlign: "center", marginTop: "1rem" }}>
            {item.applications.length} Applications Recieved
          </p>
        </div>
      ))}
    </div>
  );
};

export default CProjectsApplications;
