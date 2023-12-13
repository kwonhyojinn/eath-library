import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { googleLogin, loginEmail } from "../api/firebase";
import { LogoWide } from "../assets";

function Login(props) {
  const handleGoogleLogin = async () => {
    const user = await googleLogin();
    console.log(user);
  };

  const loginEvent = async (e) => {
    e.preventDefault();
    // try {
    //   const user = await loginEmail(email, password);
    //   if (user) {
    //     navigate("/");
    //   } else {
    //     setErrorMsg("이메일이나 비밀번호가 일치하지 않습니다.");
    //   }
    //   console.log(user);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <LoginContainer>
        <form onSubmit={loginEvent}>
          <img src={LogoWide} />
          <LoginInput type="email" placeholder="www.example.com" />
          <LoginInput type="password" placeholder="Password" />
          <LogintButton type="submit">Login</LogintButton>
          <GoogleLoginButton onClick={handleGoogleLogin}>
            Continue with Google
          </GoogleLoginButton>
        </form>
        <Link to="/signup" style={{ color: "#6d4a3ee5" }}>
          회원가입
        </Link>
      </LoginContainer>
    </div>
  );
}

const LoginContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  margin: auto;
  background: #fff;
  padding: 30px;
  & img {
    margin-bottom: 40px;
  }
`;

const LoginInput = styled.input`
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
`;

const LogintButton = styled.button`
  background: #6d4a3ee5;
  width: 100%;
  height: 40px;
  color: #fff;
  margin-bottom: 10px;
`;

const GoogleLoginButton = styled(LogintButton)`
  background: transparent;
  border: 1px solid #6d4a3ee5;
  color: #6d4a3ee5;
  margin-bottom: 20px;
`;
export default Login;
