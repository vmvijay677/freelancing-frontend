import React, { useState } from "react";
import "./Flogin.css";
import { useHistory } from "react-router-dom";
import Company from "../Company/Company";
import axios from "axios";
import Slide from "react-reveal/Slide";

const Flogin = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://freelancingappbackend.herokuapp.com/api/freelancer/login",
        {
          email: email,
          password: password,
        }
      )
      .then((res) => {
        localStorage.setItem("freelancer", res.data.user._id);
        window.location.href = "/freelancer/home";
      })
      .catch((err) => {
        setError(err.response.data);
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  };

  const guestFreelancer = (e) => {
    e.preventDefault();
    setEmail("guest@freelancer.com");
    setPassword("guest");
  };

  return (
    <div className="flogin">
      <Slide top>
        <Company />
      </Slide>

      <div className="fl-contents">
        <Slide left>
          <div>
            {error ? <p className="err-message">{error}</p> : ""}
            <p className="fl-head">Freelancers Login</p>

            <label style={{ fontSize: "18px" }}>Email</label>
            <br />
            <input
              className="fl-input"
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />

            <label style={{ fontSize: "18px" }}>Password</label>
            <br />
            <input
              className="fl-input"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <br />

            <div className="button-container">
              <button className="h-buttons" onClick={handleLogin}>
                Login
              </button>

              <button className="h-buttons" onClick={guestFreelancer}>
                Guest Login
              </button>
            </div>

            <p className="fl-footer">
              <span>Don't have a freelancer account? </span>
              <span onClick={() => history.push("/freelancer/signup")}>
                Signup
              </span>
            </p>

            <p style={{ marginTop: "6px" }} className="fl-footer">
              <span>If you're a client? </span>
              <span onClick={() => history.push("/client/login")}>
                Client Login
              </span>
            </p>
          </div>
        </Slide>

        <Slide right>
          <img
            className="fl-cimage"
            src="https://www.samayo.org/wp-content/uploads/2020/11/Samayo.org-Blog-Web-Design-SEO-creazione-siti-web-blog-e-commerce-Ayouni-Housam-13-1024x1024.png"
            alt="freelancer-login"
          />
        </Slide>
      </div>
    </div>
  );
};

export default Flogin;
