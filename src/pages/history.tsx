import React from "react";
import "twin.macro";
import "twin.macro";
import { css } from "@emotion/react";

const title = css`
    font-weight: lighter;
    text-align: center;
    text-decoration:underline;
    text-decoration-color:#9C1919;
    margin: 80px 0 60px 0;
    font-size: 34px;
    @media (max-width: 700px) {
        margin: 48px 0 30px 0;
        font-size: 24px;
    }
`;

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
    margin-left: -7px;
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
            <h1 css={title}>History</h1>
            <div css={timelineBox}>
                <ul css={timeline}>
                    <li css={point}>
                        <div css={timelineContent}>STEP1の内容をここに記入。<br />aaaa</div >
                    </li >
                    <li css={point}>
                        <div css={timelineContent}>STEP2の内容をここに記入。<br />aaaa</div >
                    </li >
                    <li css={point}>
                        <div css={timelineContent}>STEP3の内容をここに記入。<br />aaaa</div >
                    </li >
                </ul >
            </div>
        </div>
    );
};
export default history;
