import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import Company from "../Company/Company";
import Slide from "react-reveal/Slide";

const Home = () => {
  const history = useHistory();

  return (
    <div className="home">
      <Slide top>
        <Company />
      </Slide>

      <div className="h-contents">
        <Slide left>
          <div>
            <p className="h-content1">Hire the best freelancers</p>
            <p className="h-content2">for your projects.</p>
            <p className="h-content3">Right now. Right here.</p>
            <button
              className="h-buttons"
              onClick={() => history.push("/freelancer/login")}
            >
              Find Clients
            </button>{" "}
            &nbsp;
            <button
              className="h-buttons"
              onClick={() => history.push("/client/login")}
            >
              Find Talents
            </button>
          </div>
        </Slide>

        <Slide right>
          <img
            className="h-cimage"
            src="https://www.samayo.org/wp-content/uploads/2020/11/Samayo.org-Blog-Web-Design-SEO-creazione-siti-web-blog-e-commerce-Ayouni-Housam-102.png"
            alt="home"
          />
        </Slide>
      </div>
    </div>
  );
};

export default Home;
