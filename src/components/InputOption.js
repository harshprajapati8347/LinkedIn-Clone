import React from "react";
import styled from "styled-components";

const InputOption = ({ Icon, title, color }) => {
  return (
    <InputOptionStyled>
      <Icon style={{ color: color, margin: "0 7px 0 -2px" }} />
      <h4>{title}</h4>
    </InputOptionStyled>
  );
};


const InputOptionStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  color: gray;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
    border-radius: 10px;
  }
  h4 {
    margin-left: 5px;
    font-weight:600;
  }
`;

export default InputOption;
