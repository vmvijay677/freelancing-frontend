import React, { useState } from "react";
import "./Csignup.css";
import { useHistory } from "react-router-dom";
import Company from "../Company/Company";
import axios from "axios";
import Slide from "react-reveal/Slide";

const Csignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://freelancingappbackend.herokuapp.com/api/client/signup",
        {
          email,
          name,
          password,
        }
      );
      alert("Account created successfully. Kindly login now!");
      history.push("/client/login");
    } catch (err) {
      setError(err.response.data.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="csignup">
      <Slide top>
        <Company />
      </Slide>

      <div className="cl-contents">
        <Slide right>
          <div>
            {error ? <p className="err-message">{error}</p> : ""}
            <p className="cl-head">Client's Signup</p>

            <label style={{ fontSize: "18px" }}>Name</label>
            <br />
            <input
              className="cl-input"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <label style={{ fontSize: "18px" }}>Email</label>
            <br />
            <input
              className="cl-input"
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label style={{ fontSize: "18px" }}>Password</label>
            <br />
            <input
              className="cl-input"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button className="h-buttons cl-buttons" onClick={handleSubmit}>
              Signup
            </button>
            <p className="cl-footer">
              <span>Already have an account? </span>
              <span onClick={() => history.push("/client/login")}>Login</span>
            </p>
          </div>
        </Slide>

        <Slide left>
          <img
            className="cl-cimage"
            src="https://www.samayo.org/wp-content/uploads/2020/11/Samayo.org-Blog-Web-Design-SEO-creazione-siti-web-blog-e-commerce-Ayouni-Housam-136-1024x1024.png"
            alt="client-signup"
          />
        </Slide>
      </div>
    </div>
  );
};

export default Csignup;
