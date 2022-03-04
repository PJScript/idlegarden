import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import MobileMenu from "./mobileMenu";

const defaultNav = () => {
  return (
    <>
      <Head>
        <title>PocketGarden</title>
      </Head>

      <HomeMainNav className="zindex1">
        <LogoBox>
          <Image
            src={require("../../public/logo.png").default}
            width="46"
            height="46"
            layout="fixed"
          ></Image>
        </LogoBox>
        <NavInner>
          <NavItem className="hover">정보</NavItem>
          <NavItem className="hover">광산</NavItem>
          <NavItem className="hover">여행하기</NavItem>
          <NavItem className="hover">조합</NavItem>
          <NavItem className="hover">업적</NavItem>
          <NavItem className="hover">가방</NavItem>
        </NavInner>
        <MyPageBox>
          <BlankBox style={{ width: "100%" }}></BlankBox>
          <LoginBox style={{ width: "30px", height: "30px" }}>
            <Image
              className="hover"
              src={require("../../public/login.png").default}
              width="28px"
              height="28px"
            ></Image>
          </LoginBox>
          <NavItemMenu className="hover">
            <Image
              className="zindex1"
              src={require("../../public/menu.png").default}
              width="28px"
              height="28px"
            ></Image>
          </NavItemMenu>
        </MyPageBox>
      </HomeMainNav>
      {/* <MobileMenu></MobileMenu> */}
    </>
  );
};

export default defaultNav;

const HomeMainNav = styled.nav`
  display: flex;
  position: fixed;
  padding-left: 30px;
  top: 0;
  left: 0;
  border: 1px solid gray;
  width: 100%;
  height: 6vh;
  background-color: rgb(245, 245, 245, 0.8);
  z-index: 998;
  /* background: rgb(45,43,92);
background: linear-gradient(77deg, rgba(45,43,92,1) 0%, rgba(95,95,150,1) 49%, rgba(221,221,255,1) 100%, rgba(0,212,255,1) 100%); */
`;

const NavInner = styled.ul`
  display: flex;
  list-style: none;
  flex: 1 1 0;
  font-size: 14px;
  font-weight: medium;
  padding-right: 360px;
  justify-content: space-around;
  z-index: 998 ;
  @media screen and (max-width: 750px) {
    display: none;
    width: 100%;
    justify-content: space-between;
  }
`;

const NavItem = styled.li`
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
const NavItemMenu = styled.div`
  margin-right: 20px;
  margin-left: 10px;
  @media screen and (min-width: 750px) {
    display: none;
  }
`;

const LoginBox = styled.div`
  display: flex;
`;

const MyPageBox = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  @media screen and (max-width: 750px) {
    width: 100vw;
    justify-content: right;
    padding-right: 0px;
  }
`;

const LogoBox = styled.div`
  width: 40px;
  height: 40px;
`;

const BlankBox = styled.div`
  display: none;
  @media screen and (max-width: 750px) {
    display: block;
  }
`;
