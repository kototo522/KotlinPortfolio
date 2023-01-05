import { css, keyframes } from "@emotion/react";
import Strawberry from "../static/strawberry.webp";

const background = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${Strawberry});
  background-size: cover;
`;

const titleAnimetion = keyframes`
  100% {
      opacity: 1;
  }
`;

const title = css`
  font-size: 80px;
  color: white;
  opacity: 0;
  animation: ${titleAnimetion} 0.5s ease 1s 1 normal running forwards;
  @media (max-width: 780px) {
    font-size: 36px;
  }
`;

const text = css`
  font-size: 24px;
  color: white;
  opacity: 0;
  animation: ${titleAnimetion} 0.5s ease 1.5s 1 normal running forwards;
`;

const home = () => {
  return (
    <div id="portfoilo" css={background}>
      <h1 css={title}>Kotlin's&nbsp;Portfolio</h1>
      <h2 css={text}>Web&nbsp;{"&"}&nbsp;Android&nbsp;Engineer</h2>
    </div>
  );
};
export default home;
