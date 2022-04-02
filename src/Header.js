import React from "react";
import styled from "styled-components";

const Header = () => {

  return (
    <Wrap className="clearfix">
      <Logo>
        홈로고
      </Logo>
      <NavBar>
        <p>로그인</p>
        <p>회원가입</p>
      </NavBar>
    </Wrap>
  )
}

export default Header;

const Wrap = styled.div`
  padding: 10px;
  background: skyblue;
  height: 60px;
`;

const Logo = styled.div`
  float: left;
  line-height: 50px;
  margin-left: 20px;
`;
 const NavBar = styled.div`
  float: right;
  display: flex;
  margin-right: 20px;

  p {
    padding: 10px;
    background: gray;
  }

 `;