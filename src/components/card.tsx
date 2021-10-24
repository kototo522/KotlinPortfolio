import React from "react";
import { css } from "@emotion/react";

const container = css`
  display: flex;
  justify-content: center;
`;

const worksCard = css`
  height: 290px;
  width: 340px;
  margin: 0 30px 100px 30px;
  border: 1px solid #494544;
`;

const picture = css`
  height: 200px;
  width: 100%;
  background-color: gray;
`;

const text = css`
  padding: 5px 0 0 8px;
`;

const card = () => {
  return (
    <div css={container}>
      <div css={worksCard}>
        <div css={picture} />
        <p css={text}>title<br />text</p>
      </div>
    </div>
  );
};
export default card;
