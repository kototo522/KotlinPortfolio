import React from "react"
import "twin.macro";
import "twin.macro";
import { css } from "@emotion/react";

const container = css`
    position: sticky;
    top: 5px;
    display: flex;
    height: 0;
`;

const headerButton = css`
    padding-right: 36px;
    line-height: 80px;
    color: white;
    font-size: 16px;
    &:first-child{
        margin-right:auto;
        padding-left: 36px;
    }
    @media (max-width: 420px) {
        padding-right: 24px;
    }
`;


const header = () => {
    return (
        <header css={container}>
            <button css={headerButton}>Logo</button>
            <button css={headerButton}>Profile</button>
            <button css={headerButton}>Skills</button>
            <button css={headerButton}>Works</button>
        </header >
    );
};
export default header;
