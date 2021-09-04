import { css } from "@emotion/react";

const background = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url("images/strawberry.webp");
`;


const title = css`
    font-size: 80px;
    color: white;
    @media (max-width: 570px) {
        font-size: 36px;
    }
`;

const text = css`
    font-size: 24px;
    color: white;
`;

const home = () => {
    return (
        <div css={background}>
            <h1 css={title}>Kotlin's&nbsp;Portfolio</h1>
            <h2 css={text}>Web&nbsp;Engineer</h2>
        </div>
    );
};
export default home;
