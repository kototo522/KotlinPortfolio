import { css } from "@emotion/react";

const timelineBox = css`
    display: flex;
    justify-content: center;
`;

const timeline = css`
    border-left: 3px #9C1919 solid;
`;

const timelineContent = css`
    padding: 0 20px 20px 20px;
`;

const point = css`
    list-style: none;
    margin-left: -46px;
    &::before {
        content: '';
        height:  10px;
    	width:  10px;
        display:  inline-block;
        background-color: #9C1919;
        border-radius:  50%;
        position:  relative;
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
                        <div css={timelineContent}>2020年4月<br />北九州工業高等専門学校入学</div >
                    </li >
                    <li css={point}>
                        <div css={timelineContent}>2020年7月<br />コンピュータ研究部に入部</div >
                    </li >
                    <li css={point}>
                        <div css={timelineContent}>2020年12月<br />ハックツハッカソン、プレシオ杯に参加</div >
                    </li >
                    <li css={point}>
                        <div css={timelineContent}>2021年5月<br />Build@Mercari 2021に参加</div >
                    </li >
                    <li css={point}>
                        <div css={timelineContent}>2021年6月<br />ハックツハッカソン、ステゴカップに参加</div >
                    </li >
                    <li css={point}>
                        <div css={timelineContent}>2021年6月<br />ハックツハッカソン大反省会LT~ステゴカップ編~で登壇</div >
                    </li >
                    <li css={point}>
                        <div css={timelineContent}>2021年9月<br />ハックツハッカソン、スピノカップに参加</div >
                    </li >

                    <li css={point}>
                        <div css={timelineContent}>2021年12月<br />ハックツハッカソン、アンキロカップに参加</div >
                    </li >
                    <li css={point}>
                        <div css={timelineContent}>2022年3月<br />ハックツハッカソン、ギガノトカップに参加</div >
                    </li >
                </ul >
            </div>
        </div>
    );
};
export default history;
