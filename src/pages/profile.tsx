import React from "react";
import Kotlin from "../components/kotlin";
import { css } from "@emotion/react";

const container = css`
    display: flex;
    justify-content: center;
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
    const myBirthDay = {
        year: 2004,
        month: 5,
        date: 22
    };
    const birthDate = new Date(myBirthDay.year, myBirthDay.month - 1, myBirthDay.date);
    const y2 = birthDate.getFullYear().toString().padStart(4, '0');
    const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0');
    const d2 = birthDate.getDate().toString().padStart(2, '0');
    const today = new Date();
    const y1 = today.getFullYear().toString().padStart(4, '0');
    const m1 = (today.getMonth() + 1).toString().padStart(2, '0');
    const d1 = today.getDate().toString().padStart(2, '0');
    const age = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000);

    return (
        <div>
            <div css={container}>
                <div css={profileCard}>
                    <Kotlin />
                    <p css={text}>
                        Name: Kotoha Yoshimoto<br />
                        Age: {age}<br />
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
