import React from "react";
import styled from "styled-components";


const Loading = () => {
  return (
    <>
      <Container class="container">
        {/* <span class="fab fa-linkedin"></span> */}
        <img src="/images/loading.png" alt="" />
        <Line class="line">
          <Inner class="inner" />
        </Line>
      </Container>
    </>
  );
};

export default Loading;

const Container = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f5f5f5;
  width: $width * 2;
  height: $height * 2;
  background-size: cover;
  vertical-align: middle;
  margin: 20% auto;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
  }
  /* span {
    display: block;
    font-size: 5em;
    text-align: center;
    color: #0077b5;
    height: 100px;
    width: 100px;
  } */
`;
const Line = styled.div`
  height: 3px;
  width: 100%;
  background: #e8e8e8;
  margin-top: 30%;

  @keyframes slide {
    0% {
      transform-origin: left;
      transform: scalex(0.3);
    }
    //12.5%{
    //transform-origin: left;
    //transform: scalex(0.2);
    //}
    25% {
      transform-origin: left;
      transform: scalex(1);
    }
    26% {
      transform-origin: right;
      transform: scalex(1);
    }
    50% {
      transform-origin: right;
      transform: scalex(0.3);
    }
    //62.5%{
    //transform-origin: right;
    //transform: scalex(0.2);
    //}
    75% {
      transform-origin: right;
      transform: scalex(1);
    }
    76% {
      transform-origin: left;
      transform: scalex(1);
    }
    100% {
      transform-origin: left;
      transform: scalex(0.3);
    }
  }
`;
const Inner = styled.div`
  width: 100%;
  height: inherit;
  background: #0077b5;
  animation: slide 2s ease-in-out infinite;
`;
