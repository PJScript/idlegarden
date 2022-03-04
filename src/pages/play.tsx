import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ReverseCircleFadeLoading } from "../components/circleFadeLoading";
import styled from "styled-components";

const GameCanvasComponent = dynamic(
  () => import("../components/gameCanvas")
);

const play = () => {
  const [isLoading, setIsLoading] = useState<any>(true)
  console.log(isLoading,"이즈로딩")
  return (
    <>
    <GameCanvasComponent setIsLoading={setIsLoading}></GameCanvasComponent>
    {isLoading ? <DefaultLoadingBackground>로딩중입니다!</DefaultLoadingBackground>:
      <ReverseCircleFadeLoading></ReverseCircleFadeLoading>
    }
    </>
  );
};

export default play;


const DefaultLoadingBackground = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  z-index:2;
  background-color:#e3dfd2;
`



