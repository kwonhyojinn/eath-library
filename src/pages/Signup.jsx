import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { joinEmail } from "../api/firebase";
import styled from "styled-components";
import { LogoWide } from "../assets";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [psError, setPsError] = useState(""); //패스워드 에러
  const navigate = useNavigate();

  const signUpEvent = async (e) => {
    e.preventDefault(); //on submit과 submit 을 막아야하기 때문에 한번 들어옴.

    if (password.length < 6) {
      setPsError("비밀번호는 6글자 이상이어야 합니다.");
      return;
    }

    try {
      const user = await joinEmail(email, password);
      console.log(email, password);
      console.log(user);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignupContainer
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <SignupBox>
        <form onSubmit={signUpEvent}>
          <Link to="/">
            <img src={LogoWide} />
          </Link>
          <div>
            <SignupInput
              type="email"
              placeholder="www.example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <SignupInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="errText">{psError}</span>
          </div>

          <SignupButton type="submit">Sign up</SignupButton>
        </form>
      </SignupBox>
    </SignupContainer>
  );
}

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const SignupBox = styled.div`
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

const SignupInput = styled.input`
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
`;

const SignupButton = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  color: #fff;
  background: #6d4a3ee5;
  margin-top: 8px;
`;
export default Signup;
