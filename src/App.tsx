import React from "react";
import styled from "styled-components";

import NetWorthForm from "./components/NetWorthForm";

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;

function App() {
  return (
    <AppWrapper>
      <NetWorthForm />
    </AppWrapper>
  );
}

export default App;
