import { css } from "@emotion/react";
import Computer from "../static/computer.webp";
import Paint from "../static/paint.webp";

const container = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const group = css`
  display: flex;
  justify-content: center;
  margin: 20px 180px;
  flex-direction: column;
  width: 184px;
  @media (max-width: 1100px) {
    margin: 20px 80px;
  }
`;

const picture = css`
  height: 130px;
  margin: 0 auto;
`;

const subheading = css`
  font-size: 24px;
  font-family: Solway;
  color: #494544;
  margin: 20px auto;
`;

const text = css`
  font-size: 12px;
  font-family: Solway;
  color: #494544;
  margin: 0 auto;
`;

const skills = () => {
  return (
    <div css={container}>
      <div>
        <div css={group}>
          <img css={picture} src={Computer} />
          <h1 css={subheading}>CODING</h1>
          <p css={text}>
            コーディングはプログラミングにおいて作りたい機能を実装していくための大切な作業です。
            読みやすく分かりやすいコードを書くことで動作が早いサイト製作を心掛けています。
          </p>
        </div>
      </div>
      <div>
        <div css={group}>
          <img css={picture} src={Paint} />
          <h1 css={subheading}>DESIGN</h1>
          <p css={text}>
            デザインは美しさ・個性を表現するだけでなく、言葉で伝えにくい情報を分かりやすく伝える事ができる手段です。
            サイトの目的が達成でき、使う人が迷わないデザインの作成を心掛けています。
          </p>
        </div>
      </div>
    </div>
  );
};
export default skills;
