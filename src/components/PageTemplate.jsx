import React from "react";
import styled from "styled-components";

function PageTemplate({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 30px;
`;
export default PageTemplate;
