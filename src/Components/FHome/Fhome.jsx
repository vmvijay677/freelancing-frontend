import axios from "axios";
import React, { useEffect, useState } from "react";
import Company from "../Company/Company";
import "./Fhome.css";
import Slide from "react-reveal/Slide";

const Fhome = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [applied, setapplied] = useState(false);
  const [freelancerName, setFreelancerName] = useState("");

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

  const handleApply = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://freelancingappbackend.herokuapp.com/api/client/${projectsList[0]._id}/apply`,
        {
          freelancerId: localStorage.freelancer,
        }
      );
      setapplied(!applied);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getFreelancers = async () => {
      try {
        const res = await axios.get(
          `https://freelancingappbackend.herokuapp.com/api/${localStorage.freelancer}`
        );
        setFreelancerName(res.data.name);
      } catch (err) {
        console.log(err);
      }
    };

    getFreelancers();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="fhome">
      <Slide top>
        <div className="fhome-header">
          <Company />

          <div className="fhome-logout">
            <p className="fhome-fname">Welcome, {freelancerName}</p>
            <button className="h-buttons l-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </Slide>

      <Slide bottom>
        <div className="fhome-main">
          <p className="fhome-main-head">AVAILABLE PROJECTS</p>

          <div className="f-projects-app">
            {projectsList.map((item, index) => (
              <div className="f-projects-mini" key={index}>
                <p
                  style={{
                    color: "blue",
                    fontSize: "28px",
                    marginBottom: "15px",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    color: "gray",
                    fontSize: "22px",
                    marginBottom: "15px",
                  }}
                >
                  {item.skills}
                </p>
                <p style={{ fontSize: "20px", marginBottom: "10px" }}>
                  Location: {item.location}
                </p>
                <p style={{ marginBottom: "8px" }}>Price: ${item.price}</p>
                <p style={{ marginBottom: "8px" }}>
                  Experience: {item.experience} years
                </p>
                <p style={{ marginBottom: "8px" }}>
                  Client Name: {item.client}
                </p>
                <p style={{ marginBottom: "8px" }}>
                  Description: {item.description}
                </p>
                <button
                  className="h-buttons apply-button"
                  onClick={handleApply}
                >
                  {applied ? "Applied" : "Apply"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Fhome;
