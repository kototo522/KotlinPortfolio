import React, { useState } from "react";
import { css } from "@emotion/react";
import GithubImage from "../static/github.webp";
import { Link } from "gatsby";

const container = css`
  position: fixed;
  top: calc(50vh - 24px);
  right: 20px;
  height: 0;
  z-index: 100;
  @media (max-width: 420px) {
    top: 78vh;
  }
`;

const sideButton = css`
  height: 48;
  width: 48;
`;

const side = () => {
  const [GithubIcon, setGithubIcon] = useState("none");
  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > document.body.scrollHeight ||
      document.documentElement.scrollTop > document.documentElement.clientHeight
    ) {
      setGithubIcon("block");
    } else {
      setGithubIcon("none");
    }
  });
  return (
    <div css={container} style={{ display: GithubIcon }}>
      <Link to="https://github.com/kototo522" target="_blank" css={sideButton}>
        <img src={GithubImage} />
      </Link>
    </div>
  );
};
export default side;
