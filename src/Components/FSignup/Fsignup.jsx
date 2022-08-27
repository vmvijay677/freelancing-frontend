import React, { useState } from "react";
import "./Fsignup.css";
import { useHistory } from "react-router-dom";
import Company from "../Company/Company";
import axios from "axios";
import Slide from "react-reveal/Slide";

const Fsignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://freelancingappbackend.herokuapp.com/api/freelancer/signup",
        {
          email,
          name,
          password,
        }
      );
      alert("Account created successfully. Kindly login now!");
      history.push("/freelancer/login");
    } catch (err) {
      setError(err.response.data.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="fsignup">
      <Slide top>
        <Company />
      </Slide>

      <div className="fl-contents">
        <Slide left>
          <div>
            {error ? <p className="err-message">{error}</p> : ""}
            <p className="fl-head">Freelancers Signup</p>

            <label style={{ fontSize: "18px" }}>Name</label>
            <br />
            <input
              className="fl-input"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <label style={{ fontSize: "18px" }}>Email</label>
            <br />
            <input
              className="fl-input"
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label style={{ fontSize: "18px" }}>Password</label>
            <br />
            <input
              className="fl-input"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button className="h-buttons fl-buttons" onClick={handleSubmit}>
              Signup
            </button>
            <p className="fl-footer">
              <span>Already have an account? </span>
              <span onClick={() => history.push("/freelancer/login")}>
                Login
              </span>
            </p>
          </div>
        </Slide>

        <Slide right>
          <img
            className="fl-cimage"
            src="https://www.samayo.org/wp-content/uploads/2020/11/Samayo.org-Blog-Web-Design-SEO-creazione-siti-web-blog-e-commerce-Ayouni-Housam-103-1024x1024.png"
            alt="freelancer-signup"
          />
        </Slide>
      </div>
    </div>
  );
};

export default Fsignup;
