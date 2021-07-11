import "twin.macro";
import "twin.macro";
import { css } from "@emotion/react";

const myStyle = css`
  color: red;
`;

const hello = () => {
  return (
    <div>
      <button tw="px-4 py-2 border-4 border-green-400 border-solid rounded focus:outline-none">
        tw prop
      </button>
      <div css={myStyle}>Page1</div>
    </div>
  );
};
export default hello;
