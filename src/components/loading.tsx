import { useEffect, useState } from "react"
import styled from "styled-components"

const loading = ({visibility}:any) => {
    return (
        <LoadingContainer className="zindex1" visibility={visibility}>
          <p className="zinde1">로딩 중...</p>
          <img src={require("/Users/gamja/idlegarden/public/loadingIcon01.png").default}></img>
        </LoadingContainer>
    )
}

export default loading



const LoadingContainer = styled.div.attrs(()=>{

})`
  display:flex;
  position:absolute;
  justify-content: center;
  align-items: center;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  visibility: ${(props)=> props.visibility ? "visible" : "hidden" };
  /* background-color:rgba(1,1,1,0); */
`