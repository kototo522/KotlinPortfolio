import React from 'react';
import { css } from "@emotion/react";

const title = css`
    display: flex;
    font-size: 30px;
    color: #494544;
    top: 0px;
    margin-top: 90px;
    justify-content: center;
`

const container = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const card = css`
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 300px;
    margin: 50px 30px 20px 40px;
    border-radius: 10px;
    border: 1px solid #494544;
    background-color: rgba(255,244,219,0.1);
`;

const cardTitle = css`
    color:#494544;
    font-size: 22px;
    margin: 20px auto;
    text-decoration:underline;
`;

const cardText = css`
    height: 95px;
    width: 240px;
    font-size: 16px;
    margin: 0 auto;
    color: #494544;
`;

const rote1 = css`
    font-size: 24px;
    margin: 20px 108.5px;
    &:before {
        position: absolute;
        color: #cccccc;
        content:"★★★";
    }
    &:after {
        position: absolute;
        color: #494544;
        content:"★";
    }
`;

const rote2 = css`
    font-size: 24px;
    margin: 20px 108.5px;
    &:before {
        position: absolute;
        color: #cccccc;
        content:"★★★";
    }
    &:after {
        position: absolute;
        color: #494544;
        content:"★★";
    }
`;

const rote3 = css`
    font-size: 24px;
    margin: 20px 108.5px;
    &:before {
        position: absolute;
        color: #cccccc;
        content:"★★★";
    }
    &:after {
        position: absolute;
        color: #494544;
        content:"★★★";
    }
`;

const Technology = () => {
    return (
        <div>
            <h1 css={title}>Language</h1>
            <div css={container}>
                <div css={card}>
                    <h2 css={cardTitle}>HTML</h2>
                    <p css={cardText}>
                        Reactなどでよく使います。このポートフォリオ作成にも使いました。
                    </p>
                    <div css={rote3} />
                </div>
                <div css={card}>
                    <h2 css={cardTitle}>CSS</h2>
                    <p css={cardText}>
                        自分で描いたデザインを表現するときによく使います。このポートフォリオ作成にも使いました。
                    </p>
                    <div css={rote3} />
                </div>
                <div css={card}>
                    <h2 css={cardTitle}>Typescript</h2>
                    <p css={cardText}>
                        ReactやNextなどでよく使います。このポートフォリオ作成にも使いました。
                    </p>
                    <div css={rote2} />
                </div>
                <div css={card}>
                    <h2 css={cardTitle}>Javascript</h2>
                    <p css={cardText}>
                        ReactやNextなどで使います。初めてのwebページ製作で使いました。
                    </p>
                    <div css={rote2} />
                </div>
                <div css={card}>
                    <h2 css={cardTitle}>C++</h2>
                    <p css={cardText}>
                        始めて触ったプログラミング言語です。競技プログラミングで使います。
                    </p>
                    <div css={rote2} />
                </div>
                <div css={card}>
                    <h2 css={cardTitle}>C</h2>
                    <p css={cardText}>
                        授業である程度使えるようになりました。 競技プログラミングで使います。
                    </p>
                    <div css={rote2} />
                </div>
                <div css={card}>
                    <h2 css={cardTitle}>Kotlin</h2>
                    <p css={cardText}>
                        初めて自分から進んで学んだ言語です。競技プログラミングで使います。
                    </p>
                    <div css={rote1} />
                </div>
                <div css={card}>
                    <h2 css={cardTitle}>Golang</h2>
                    <p css={cardText}>
                        競技プログラミングで使います。
                    </p>
                    <div css={rote1} />
                </div>
            </div>
            <h1 css={title}>Framework</h1>
            <div css={container}>
                <div css={card}>
                    <h2 css={cardTitle}>React.js</h2>
                    <p css={cardText}>
                        HTMLをJavascriptの中に書けたり、Hook等便利な機能があったりするので好きです。このポートフォリオ作成にも使いました。
                    </p>
                    <div css={rote3} />
                </div>
                <div css={card}>
                    <h2 css={cardTitle}>Next.js</h2>
                    <p css={cardText}>
                        画面遷移が簡単に書けて、速いので好きです。
                    </p>
                    <div css={rote2} />
                </div>
                <div css={card}>
                    <h2 css={cardTitle}>ReactNative</h2>
                    <p css={cardText}>
                        モバイルアプリの開発がJSでできるので嬉しいです。
                    </p>
                    <div css={rote1} />
                </div>
            </div>
            <h1 css={title}>Other</h1>
            <div css={container}>
                <div css={card}>
                    <h2 css={cardTitle}>styled-components</h2>
                    <p css={cardText}>
                        コンポーネント単位でcssが管理されているので見たときにスッキリするので好きです。このポートフォリオ作成にも使いました。
                    </p>
                    <div css={rote3} />
                </div>
                <div css={card}>
                    <h2 css={cardTitle}>Figma</h2>
                    <p css={cardText}>
                        デザインを考えたり、共同開発でデザインを共有するときに使います。このポートフォリオ作成にも使いました。
                    </p>
                    <div css={rote3} />
                </div>
            </div>
        </div >
    )
}

export default Technology