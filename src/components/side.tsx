import React from "react";
import { css } from "@emotion/react";
import GithubImage from "../static/github.webp";
import { Link } from "gatsby";

const container = css`
  position: fixed;
  top: calc(50vh - 24px);
  right: 20px;
  height: 0;
`;

const sideButton = css`
  height: 48;
  width: 48;
`;

const side = () => {
  return (
    <div css={container}>
      <Link to="https://github.com/kototo522" target="_blank" css={sideButton}>
        <img src={GithubImage} />
      </Link>
    </div>
  );
};
export default side;
