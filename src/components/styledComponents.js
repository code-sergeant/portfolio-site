import styled, { keyframes } from "styled-components";

// Animations
const moveInLeft = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    10% {
      transform: rotate(50deg);
    }
    80% {
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  `;

const moveInRight = keyframes`
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    10% {
      transform: rotate(-50deg);
    }
    80% {
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
`;

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

// Layout Components
export const Header = styled.header`
  height: 95vh;
  background-image: linear-gradient(
      to bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 131, 0.8)
    ),
    url("https://github.com/jonasschmedtmann/advanced-css-course/blob/master/Natours/starter/img/hero.jpg?raw=true");
  background-size: cover;
  background-position: top;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

export const LogoBox = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`;

export const Logo = styled.img`
  height: 40px;
  &:hover {
    animation: ${rotate} 1s;
  }
`;

export const Heading = styled.h1`
  display: block;
  color: #fff;
  font-size: 60px;
  font-weight: 400px;
  letter-spacing: 35px;
  text-transform: uppercase;
  backface-visibility: hidden;
  animation: ${moveInLeft} 2s;
  animation-timing-function: ease-out;
`;

export const SubHeading = styled(Heading)`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 13.4px;
  animation: ${moveInRight} 2s;
  margin-bottom: 60px;
`;

export const TextBox = styled.div`
  position: absolute;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-45%, -40%);
`;

export const CtaButton = styled.a`
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    background-color: #fff;
    color: #777;
    padding: 15px 40px;
    border-radius: 200px;
    transition: all 0.2s;
  }
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
`;
