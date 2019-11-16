import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import ConnCon2020 from "./images/ConnCon2020.png";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Image = styled.img`
  height: 460px;
  width: 460px;
`;

export const ConnCon2020Image = () => <img src={ConnCon2020}></img>;

ReactDOM.render(
  <Wrapper>
    <Title>
      Hello world again this is a really long string and I'd like prettier to
      handle it for me blah blah blah this line is way too long!
    </Title>
    <Image src={ConnCon2020}></Image>
  </Wrapper>,
  document.getElementById("root")
);
