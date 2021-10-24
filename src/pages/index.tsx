import React from "react"
import { css } from "@emotion/react";
import Header from "../components/header";
import Home from "./home";
import Profile from "./profile";
import History from "./history";
import Skills from "./skills";
import Technology from "../components/technology";
import Works from "./works";
import Footer from "../components/footer";

const title = css`
    font-weight: lighter;
    text-align: center;
    text-decoration:underline;
    text-decoration-color:#9C1919;
    margin: 80px 0 60px 0;
    font-size: 34px;
    font-weight: bold;
    @media (max-width: 700px) {
        margin: 48px 0 30px 0;
        font-size: 24px;
    }
`;

const index = () => {
  return (
    <div>
      <Header />
      <Home />
      <h1 id="profile" css={title}>Profile</h1>
      <Profile />
      <h1 css={title}>History</h1>
      <History />
      <h1 id="skills" css={title}>Skills</h1>
      <Skills />
      <Technology />
      <h1 id="works" css={title}>Works</h1>
      <Works />
      <Footer />
    </div>
  );
};
export default index;


// import React from "react";
// import "twin.macro";
// import "twin.macro";
// import { css } from "@emotion/react";

// const myStyle = css`
//   color: red;
// `;

// const hello = () => {
//   return (
//     <div>
//       <button tw="px-4 py-2 border-4 border-green-400 border-solid rounded focus:outline-none">
//         tw prop
//       </button>
//       <div css={myStyle}>Page1</div>
//     </div>
//   );
// };
// export default hello;