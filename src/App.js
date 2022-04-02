import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import Header from './Header';
import Main from './Main';
import SignIn from './SignIn';

function App() {
  return (
    <Wrap>
      <Route path={"/"}>
        <Header />
        <Main />
      </Route>
      <Route path={"/signin"} component={SignIn} />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid #000;
  box-sizing: border-box;
  /* height: 100vh; */
`;