import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: ${window.screen.height}px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.p`
  font-size: 16px;
`;

const App = () => {
  return (
    <Container>
      <Content>Browser</Content>
    </Container>
  );
};

export default App;
