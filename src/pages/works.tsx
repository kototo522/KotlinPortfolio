import React from "react";
import Card from "../components/card";
import { css } from "@emotion/react";

const first = css`
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  overflow: auto;
`;

const second = css`
  scroll-snap-type: center;
  display: inline-block;
  white-space: normal;
`;

const works = () => {
  return (
    <div css={first}>
      <div css={second}>
        <Card />
      </div>
      <div css={second}>
        <Card />
      </div>
      <div css={second}>
        <Card />
      </div>
      <div css={second}>
        <Card />
      </div>
    </div>
  );
};
export default works;
