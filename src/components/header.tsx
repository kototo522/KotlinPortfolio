import React from "react";
import { css } from "@emotion/react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import KotlinLogo from "../static/kotlinLogo.webp";

const container = css`
  position: sticky;
  top: 5px;
  display: flex;
  height: 0;
`;

const headerButton = css`
  padding-right: 36px;
  line-height: 90px;
  color: white;
  font-size: 16px;
  text-decoration: none;
  &:first-child {
    height: 80px;
    margin-right: auto;
    padding: 5px 0 0 10px;
  }
  @media (max-width: 420px) {
    padding-right: 24px;
  }
`;

const header = () => {
  return (
    <header css={container}>
      <img css={headerButton} src={KotlinLogo} />
      <AnchorLink href="#profile" css={headerButton}>
        Profile
      </AnchorLink>
      <AnchorLink href="#skills" css={headerButton}>
        Skills
      </AnchorLink>
      {/* <AnchorLink href="#works" css={headerButton}>
        Works
      </AnchorLink> */}
    </header>
  );
};
export default header;
