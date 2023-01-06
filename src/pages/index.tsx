import React from "react";
import { css } from "@emotion/react";
import Header from "../components/header";
import Side from "../components/side";
import Home from "./home";
import Profile from "../components/profile";
import History from "../components/history";
import Skills from "../components/skills";
import Technology from "../components/technology";
import Works from "../components/works";
import Footer from "../components/footer";
import Strawberry from ".././static/strawberry.webp";

const title = css`
  font-weight: lighter;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #9c1919;
  padding: 80px 0 60px 0;
  font-size: 34px;
  font-weight: bold;
  @media (max-width: 700px) {
    padding: 48px 0 30px 0;
    font-size: 24px;
  }
`;

const index = () => {
  return (
    <div style={{ marginTop: -8, marginLeft: -8 }}>
      <html lang="ja" prefix="og: http://ogp.me/ns#">
        <meta
          property="og:url"
          content="https://kotlinportfolio.netlify.app/"
        />
        <meta property="og:title" content="ことりんぽーとふぉりお" />
        <meta
          property="og:description"
          content="ことりんのポートフォリオです"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={Strawberry} />
        <meta name="twitter:card" content="summary_large_image" />
      </html>
      <Header />
      <Side />
      <Home />
      <h1 id="profile" css={title}>
        Profile
      </h1>
      <Profile />
      <h1 css={title}>History</h1>
      <History />
      <h1 id="skills" css={title}>
        Skills
      </h1>
      <Skills />
      <Technology />
      {/* <h1 id="works" css={title}>
        Works
      </h1> */}
      {/* <Works /> */}
      <Footer />
    </div>
  );
};
export default index;
