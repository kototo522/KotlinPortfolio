import { css } from "@emotion/react";

const container = css`
    display: flex;
    height: 150px;
    width: 100vw;
    background-color: #9C1919;
    align-items: flex-end;
    @media (max-width: 700px) {
        height: 120px;
    }
`;

const text = css`
    margin: 0 0 30px 40px;
    font-size: 14px;
    text-align: center;
    color: white;
    text-decoration: none;
    &:last-child{
        color: black;
        margin: 0 0;
    }
    @media (max-width: 700px) {
        &:last-child{
            margin: 0 auto;
        }
    }
`;

const box = css`
    height: 90px;
    width: 120px;
    margin: 0 40px 30px auto;
    background-color: white;
    text-decoration: none;
    @media (max-width: 700px) {
        height: 75px;
        width: 90px;
        margin: 0 40px 20px auto;
    }
`;

const arrow = css`
    height: 14px;
    width: 14px;
    border: 3px solid;
    border-color:  transparent transparent #565656 #565656;
    transform: rotate(135deg);
    margin: 20px auto 10px auto;
`;

const footer = () => {
    return (
        <footer css={container}>
            <a href="#profile" css={text}>Profile</a>
            <a href="#skills" css={text}>Skills</a>
            <a href="#works" css={text}>Works</a>
            <a href="#" css={box}>
                <div css={arrow} />
                <p css={text}>PAGE TOP</p>
            </a>
        </footer>
    );
};
export default footer;
