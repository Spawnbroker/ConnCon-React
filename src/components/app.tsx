import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import ConnCon2020 from "../images/ConnCon2020.png";
import Policies from "../files/Selected_Policies.pdf";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  font-weight: bold;
`;

const Wrapper = styled.div`
  text-align: center;
  color: #00c;
`;

const Image = styled.img`
  height: 460px;
  width: 460px;
`;

const Super = styled.sup`
  vertical-align: super;
  font-size: smaller;
`;

const Paragraph = styled.p`
  display: block;
  text-align: center;
`;

const Anchor = styled.a`
  cursor: pointer;
  text-decoration: underline;
`;

ReactDOM.render(
  <Wrapper>
    <Image src={ConnCon2020}></Image>
    <Title>
      March 20<Super>th</Super> - 22<Super>nd</Super> 2020
    </Title>
    <Paragraph>
      (Click "Site" for location, directions, and to book a room.)
    </Paragraph>
    <Paragraph>
      <Anchor href={Policies} target="new">
        Some ConnCon / Falcon Policies
      </Anchor>
    </Paragraph>
  </Wrapper>,
  document.getElementById("root")
);
