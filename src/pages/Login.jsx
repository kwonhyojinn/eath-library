import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { googleLogin, loginEmail } from "../api/firebase";
import { LogoWide } from "../assets";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const handleGoogleLogin = async () => {
    const user = await googleLogin();
    console.log(user);
  };

  const loginEvent = async (e) => {
    e.preventDefault();
    try {
      const user = await loginEmail(email, password);
      if (user) {
        navigate("/");
      } else {
        setErrorMsg("이메일이나 비밀번호가 일치하지 않습니다.");
      }
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <form onSubmit={loginEvent}>
          <Link to="/">
            <img src={LogoWide} />
          </Link>
          <LoginInput
            type="email"
            placeholder="www.example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <LogintButton type="submit">Login</LogintButton>
          <GoogleLoginButton onClick={handleGoogleLogin}>
            Continue with Google
          </GoogleLoginButton>
          {errorMsg && <span className="errorText">{errorMsg}</span>}
        </form>
        <Link to="/signup" style={{ color: "#6d4a3ee5" }}>
          회원가입
        </Link>
      </LoginBox>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const LoginBox = styled.div`
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
