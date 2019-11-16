import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

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

ReactDOM.render(
  <Wrapper>
    <Title>
      Hello world again this is a really long string and I'd like prettier to
      handle it for me blah blah blah this line is way too long!
    </Title>
  </Wrapper>,
  document.getElementById("root")
);
