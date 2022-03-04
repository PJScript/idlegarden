import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Link from "next/link";
import Loading from "../components/loading"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CircleFadeLoading } from "../components/circleFadeLoading";
import routingDelaySecond from "../utils/routingDelaySecond";

const MainPageCenterCanvas = dynamic(
  () => import("../components/mainPageCenterCanvas")
);
// color3 색상
//https://forum.babylonjs.com/t/simple-tool-to-convert-hexadecimal-colors-to-babylon-color-code/286
const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState<any>(false)
  const router = useRouter()

  useEffect(()=>{
    console.log(router,"라우터")
  },[])

  return (
    <>
      {/* <CircleFadeLoading></CircleFadeLoading> */}
      {isLoading ? 
        <CircleFadeLoading></CircleFadeLoading>
      : null}
      <HomeMainContainer>
        <HomeMainSectionOne>
          <SectionOneItemDiv>
            <SectionOneTitle className="zindex1">
              Hello{" "}
            </SectionOneTitle>
            <SectionOneTitle className="zindex1">Hi </SectionOneTitle>
            <SectionOneTitle className="zindex1">
              Bye!
            </SectionOneTitle>
            <SectionOneSubTitle01 className="zindex1">
              Let's play Now!
            </SectionOneSubTitle01>
          </SectionOneItemDiv>
          <SectionOneItemDiv>
            <MainPageCenterCanvas />
            <BlankCanvasCopy />
          </SectionOneItemDiv>
          <SectionOneItemDiv>
            <SectionOneTitle className="zindex1">안녕</SectionOneTitle>
            <SectionOneTitle className="zindex1">반갑</SectionOneTitle>
            <SectionOneTitle className="zindex1">
              잘가
            </SectionOneTitle>
          </SectionOneItemDiv>
        </HomeMainSectionOne>
        <StartBtnWrapper>
            <StartBtn className="hover" onClick={() => {setIsLoading(true), routingDelaySecond(3,router,"/play")} }>시작하기</StartBtn>
        </StartBtnWrapper>
      </HomeMainContainer>
    </>
  );

  {
    /* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */
  }
};

export default Home;

const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;
  font-family: 'Noto Sans KR', sans-serif;;
  height:100vh;
`;



const CircleLoading = styled.div`
  display:flex;
  z-index:2;
  position:absolute;
  width:10;
  height:10;
`

const HomeMainSectionOne = styled.section`
  display: flex;
  
  @media screen and (max-width: 970px) {
    flex-direction: column;
    /* justify-content: center; */
    margin-top: 400px;
  }
`;

const BlankCanvasCopy = styled.canvas`
  width: 100%;
  height: 90vh;
`;



const HomeMainSectionTwo = styled.section``;
const HomeMainSectionThree = styled.section``;

const SectionOneItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const SectionOneTitle = styled.div`
  width:300px;
  font-weight: bold;
  font-size:20px;
  /* text-align: left; */
  @media screen and (max-width: 970px) {
    width:100%;
    text-align:center;
  }
`

const SectionOneSubTitle01 = styled.div`
  width:250px;
  font-weight:medium;
  font-size:16px;
  color:gray;
  margin-top:6px;
  margin-left:18px;
  text-align: center;
  @media screen and (max-width: 970px) {
    width:100%;
    padding-right:40px;
  }
`
const SectionTwoItemDiv = styled.div``;

const StartBtnWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  top: 92%;
  width: 90vw;
  height: 40px;
`;
const StartBtn = styled.div`
  width: 260px;
  height: 30px;
  border: 1px solid purple;
  text-align: center;
  padding-top: 5px;
  border-radius: 7px;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  opacity: 0.8;
`;


const HomeSecondContainer = styled.div`
  
`
