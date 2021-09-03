import React from "react";
import Kotlin from "../components/kotlin";
import "twin.macro";
import "twin.macro";
import { css } from "@emotion/react";

const container = css`
    display: flex;
    justify-content: center;
`;

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

const profileCard = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 940px;
    border: 1px solid #000000;
    box-shadow: 12px 12px 0 #9C1919;
    @media (max-width: 940px) {
        width: calc(100% - 50px);
    }
`;

const text = css`
    margin: 0 auto;
    line-height: 2em;
    font-size: 22px;
`;

const profile = () => {
    return (
        <div>
            <h1 css={title}>Profile</h1>
            <div css={container}>
                <div css={profileCard}>
                    <Kotlin />
                    <p css={text}>
                        Name: Kotoha Yoshimoto<br />
                        Age: 17<br />
                        Birthday: 2004/5/22<br />
                        From: Fukuoka<br />
                        Belongs: NITKIT<br />
                        Bob: WebfrontEngineer, Designer<br />
                    </p>
                </div>
            </div>
        </div>
    );
};
export default profile;
