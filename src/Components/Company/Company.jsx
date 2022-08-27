import React from "react";
import "./Company.css";
import { useHistory } from "react-router-dom";

const Company = () => {
  const history = useHistory();

  return (
    <div className="h-company" onClick={() => history.push("/")}>
      <img
        className="h-image"
        src="https://www.transparentpng.com/thumb/innovation/innovation-free-transparent-png-0.png"
        alt="indian freelancers logo"
      />
      <p className="h-cname">Indian Freelancers</p>
    </div>
  );
};

export default Company;
