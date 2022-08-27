import React, { useState } from "react";
import Company from "../Company/Company";
import "./Clogin.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Slide from "react-reveal/Slide";

const Clogin = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://freelancingappbackend.herokuapp.com/api/client/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("client", res.data.user.name);
        window.location.href = "/client/home";
      })
      .catch((err) => {
        setError(err.response.data);
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  };

  const guestClient = (e) => {
    e.preventDefault();
    setEmail("guest@client.com");
    setPassword("guest");
  };

  return (
    <div className="clogin">
      <Slide top>
        <Company />
      </Slide>

      <div className="cl-contents">
        <Slide right>
          <div>
            {error ? <p className="err-message">{error}</p> : ""}
            <p className="cl-head">Client Login</p>

            <label style={{ fontSize: "18px" }}>Email</label>
            <br />
            <input
              className="cl-input"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label style={{ fontSize: "18px" }}>Password</label>
            <br />
            <input
              className="cl-input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <div className="button-container">
              <button className="h-buttons" onClick={handleLogin}>
                Login
              </button>

              <button className="h-buttons" onClick={guestClient}>
                Guest Login
              </button>
            </div>

            <p className="cl-footer">
              <span>Don't have an account? </span>
              <span onClick={() => history.push("/client/signup")}>Signup</span>
            </p>

            <p style={{ marginTop: "6px" }} className="cl-footer">
              <span>If you're a freelancer? </span>
              <span onClick={() => history.push("/freelancer/login")}>
                Freelancer Login
              </span>
            </p>
          </div>
        </Slide>

        <Slide left>
          <img
            className="cl-cimage"
            src="https://www.samayo.org/wp-content/uploads/2020/11/Samayo.org-Blog-Web-Design-SEO-creazione-siti-web-blog-e-commerce-Ayouni-Housam-142-1024x1024.png"
            alt="client-login"
          />
        </Slide>
      </div>
    </div>
  );
};

export default Clogin;
