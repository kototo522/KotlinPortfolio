import { css } from "@emotion/react";

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
          <li css={point}>
            <div css={timelineContent}>
              2020年4月
              <br />
              北九州工業高等専門学校入学
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2020年7月
              <br />
              コンピュータ研究部に入部
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2020年12月
              <br />
              ハックツハッカソン、プレシオ杯に参加
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2021年5月
              <br />
              Build@Mercari 2021に参加
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2021年6月
              <br />
              ハックツハッカソン、ステゴカップに参加
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2021年6月
              <br />
              ハックツハッカソン大反省会LT~ステゴカップ編~で登壇
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2021年9月
              <br />
              ハックツハッカソン、スピノカップに参加
            </div>
          </li>

          <li css={point}>
            <div css={timelineContent}>
              2021年12月
              <br />
              ハックツハッカソン、アンキロカップに参加
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2022年3月
              <br />
              ハックツハッカソン、ギガノトカップに参加
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2023年3月15日-3月28日
              <br />
              CA Tech Dojo -Android編- に参加
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2023年6月9日-6月17日
              <br />
              技育CAMPキャラバン2023 Vol.2@福岡に参加．企業賞を受賞
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2023年8月
              <br />
              北九州ハッカソンに参加．最優秀賞を受賞
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2023年9月3日-9月15日
              <br />
              チームラボ株式会社サマーインターン(就業型)に参加
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2023年9月
              <br />
              技育展決勝大会に参加．ファイナリストに選ばれました
            </div>
          </li>
          <li css={point}>
            <div css={timelineContent}>
              2023年10月-
              <br />
              カラビナテクノロジー株式会社長期インターンに参加
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default history;
