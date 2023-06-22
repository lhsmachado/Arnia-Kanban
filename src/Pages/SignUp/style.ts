import styled from "styled-components";

export const Background = styled.div`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  display: flex;
`;
export const Body = styled.div`
  width: 567px;
  height: 961px;
  margin-top: 32px;
  margin-bottom: 32px;
  background: #3a72f8;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;

  p {
    font-size: 18px;
    font-weight: 700;
    margin-left: 65px;
    margin-bottom: 0px;
    color: #0a2668;
  }

  a {
    color: #ffffff;
    margin-top: 25px;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
  }
`;
export const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #ffffff;
  margin-top: 50px;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  input {
    margin-left: 65px;
    margin-top: 10px;
    width: 438px;
    height: 59px;
    border-radius: 25px;
    border-style: none;
    padding-left: 10px;
    font-size: 18px;
  }

  label {
    margin-left: 65px;

    margin-top: 21px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
  }

  button {
    margin-top: 70px;
    margin-left: 180px;
    width: 209px;
    height: 59px;
    border-radius: 25px;
    border-style: none;
    background-color: #0a2668;
    color: #ffffff;
    font-size: 24px;
    line-height: 36px;
    font-family: "Poppins";
    font-weight: 700;
  }
`;