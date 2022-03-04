import loadingIcon01 from "../../public/loadingIcon01.png";
import loadingIcon02 from "../../public/loadingIcon02.png";
import loadingIcon03 from "../../public/loadingIcon03.png";
import loadingIcon04 from "../../public/loadingIcon04.png";
import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";

const loadingChangeImage = ({isLoading}:any) => {
  const [result, setResult] = useState<any>(loadingIcon01);
  let arr = [loadingIcon01, loadingIcon02, loadingIcon03, loadingIcon04];
  let clearTimeOut: any;
  let intervalCount = 0;

  const intervalChangeIcon = () => {
 

  };


  return (
    <ImageWrapper>
      <Image src={result} width={60} height={60}></Image>
    </ImageWrapper>
  );
};

export default loadingChangeImage;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
