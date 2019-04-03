import React from "react";
import {
  Header,
  LogoBox,
  Logo,
  TextBox,
  Heading,
  SubHeading,
  CtaButton
} from "../components/styledComponents";

function Jumbotron({
  backgroundImageUrl,
  logoImageUrl,
  headerText,
  subHeaderText,
  buttonText
}) {
  return (
    <>
      <Header>
        <LogoBox>
          <Logo
            alt="Logo"
            src="https://github.com/jonasschmedtmann/advanced-css-course/blob/master/Natours/starter/img/logo-white.png?raw=true"
          />
        </LogoBox>
        <TextBox>
          <Heading>Heading</Heading>
          <SubHeading>Here is a subheading</SubHeading>
          <CtaButton href="#">What I Do</CtaButton>
        </TextBox>
      </Header>
    </>
  );
}

export default Jumbotron;
