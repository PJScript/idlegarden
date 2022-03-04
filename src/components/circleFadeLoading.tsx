import styled from "styled-components";
import { useState, useEffect } from "react";
export const CircleFadeLoading = () => {
  return (
    <CircleFadeWrapper>
      <Circle></Circle>
    </CircleFadeWrapper>
  );
};

export const ReverseCircleFadeLoading = () => {
  const [display,setDisplay] = useState<boolean>(true)

  useEffect(()=>{
    setTimeout(()=>{
      setDisplay(false)
    },1200 )
  })
  return (
    <CircleFadeWrapper>
      <ReverseCircle display={display}></ReverseCircle>
    </CircleFadeWrapper>
  );
};

const CircleFadeWrapper = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  z-index: 0;
`;
const Circle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  z-index: 999;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3000px;
    height: 3000px;
    border-radius: 100%;
    box-shadow: 0px 0px 0px 5000px #e3dfd2;
    animation: 2s linear BackgroundRemove;
    animation-fill-mode: forwards;
    /* animation-delay: 1s; */

    @keyframes BackgroundRemove {
      0% {
        border-bottom-right-radius: 0%;
        width: 120vw;
        height: 120vw;
      }
      10% {
        border-bottom-right-radius: 90%;
        width: 99vw;
        height: 99vw;
      }
      100% {
        width: 0vw;
        height: 0vw;
        border-bottom-right-radius: 90%;
      }
    }
  }
`;

const ReverseCircle = styled.div.attrs(()=>{})`
  display: ${props => props.display ? 'block':'none'};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0px;
    height: 0px;
    border-radius: 100%;
    box-shadow: 0px 0px 0px 5000px rgb(227, 223, 210);
    animation: 1.5s linear BackgroundRemove2;
    animation-fill-mode: forwards;

    /* animation-delay: 1s; */

    @keyframes BackgroundRemove2 {
      0% {
        display: block;
        position: relative;
        width: 0vw;
        height: 0vw;
        border-bottom-right-radius: 90%;
      }
      50% {
        position: relative;
        border-bottom-right-radius: 90%;
        width: 60vw;
        height: 60vw;
      }
      100% {
        display: none;
        border-bottom-right-radius: 90%;
        width: 3000px;
        height: 3000px;
      }
    }
  }
`;
