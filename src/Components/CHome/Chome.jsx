import React from "react";
import CAddProjects from "../CAddProjects/CAddProjects";
import Company from "../Company/Company";
import CProjectsApplications from "../CProjectsApplications/CProjectsApplications";
import "./Chome.css";
import Slide from "react-reveal/Slide";

const Chome = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="chome">
      <Slide top>
        <div className="chome-header">
          <Company />

          <div className="chome-logout">
            <p className="chome-cname">Welcome, {localStorage.client}</p>
            <button className="h-buttons l-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </Slide>

      <div className="chome-main">
        <Slide left>
          <div>
            <p className="chome-main-head">ADD PROJECTS</p>
            <CAddProjects />
          </div>
        </Slide>

        <Slide right>
          <div>
            <p className="chome-main-head">PROJECTS APPLICATIONS</p>
            <CProjectsApplications />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Chome;
