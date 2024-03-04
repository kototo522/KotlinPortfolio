import { css } from "@emotion/react";
import timelineData from "../string/history.json";

const timelineBox = css`
  display: flex;
  justify-content: center;
  @media (max-width: 940px) {
    margin-left: 20px;
  }
`;

const timeline = css`
  border-left: 3px #9c1919 solid;
`;

const timelineContent = css`
  padding: 0 20px 20px 20px;
`;

const point = css`
  list-style: none;
  margin-left: -46px;
  &::before {
    content: "";
    height: 10px;
    width: 10px;
    display: inline-block;
    background-color: #9c1919;
    border-radius: 50%;
    position: relative;
    top: 22px;
    margin-right: 5px;
  }
`;

const history = () => {
  return (
    <div>
      <div css={timelineBox}>
        <ul css={timeline}>
          {Object.keys(timelineData).map((key) => {
            const event = timelineData[key];
            return (
              <li key={key} css={point}>
                <div css={timelineContent}>
                  {event.TERM}
                  <br />
                  {event.TEXT}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default history;
