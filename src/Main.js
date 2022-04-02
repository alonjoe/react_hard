import React from "react";
import styled from "styled-components";
import tank from "./tank.jpg";

const Main = () => {

  return (
    <Wrap className="clearfix">
      <Img>
        <img src={tank} />
      </Img>
      <Content>
        <div>
          <div>아이디</div>
          <div>...</div>
        </div>
        <div>
          내용입니다!
        </div>
      </Content>
    </Wrap>
  )
}

export default Main;

const Wrap = styled.div`
  border: 1px solid #000;
  box-sizing: border-box;
`;

const Img = styled.div`
  width: 55%;
  background: orange;
  float: left;
  border: 1px solid #000;
  box-sizing: border-box;

  img {
    width: 100%;
  }
`;

const Content = styled.div`
  float: right;
  width: 45%;

  div:first-child {
    display: flex;
    justify-content: space-between;
  }
`;

