import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../pages/home.css';
// import 'https://fonts.googleapis.com/css?family=Baloo+Paaji';

const Wrap = styled.div`
/* background:radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%);
  /* overflow: hidden; */
  /* height: 100%;
  display: block; */ */
  `

const Contsection = styled.section`
  width: 800px;
  height: 220px;
  position: relative;
  margin-left: 50px;
`

const Title = styled.h1`
  font-family: 'Baloo Paaji', cursive;
  font-size: 75px;
  text-transform: uppercase;
  span{
    width: 100%;
    float: left;
    color: #000000;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    transform: translateY(-50px);
    opacity: 0;
    animation-name: titleAnimation;
    animation-timing-function:ease;
    animation-duration: 3s;
    animation-iteration-count:infinite;
    animation-delay: 0.6s;
  -webkit-animation-fill-mode: forwards;
  }
  span:first-child{
    animation-delay: 0.7s;
  }
  span:last-child{
    color: #f8d26a;
    animation-delay: 0.5s;
  }
  @keyframes titleAnimation {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  20% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  80% {
       transform: translateY(0);
       opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  100% {
       transform: translateY(50px);
       opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    
  }
}
`

const Ocean = styled.div`
  height: 5%;
  width:100%;
  position:absolute;
  bottom:0;
  left:0;
  background: #015871;
`

const Wave = styled.div`
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  :nth-of-type(2) {
  top: -175px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
  }
  @keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
}
`
const Startbutton = styled.button`
   width: 150px;
    height: 80px;
    font-size: 40px;
    font-family: 'Baloo Paaji', cursive;
    border: 0;
    border-radius: 40px;
    background-color: #fff29c;
    color: #000000;
    cursor: pointer;
    position: absolute;
    bottom: 50px;
    right: 100px;
    z-index: 2;
    :hover{
    background-color: #6a9eff;
}
`

export default function Home() {

    const navigate = useNavigate();
    const nextpage = () => {
        navigate("../FirstStep")
    }

  return (
    <Wrap>
      <Contsection class="container">
        <Title>
        <span>Let's create</span> 
        <span>amazing Github profile!</span> 
        </Title>
        </Contsection>
        <Startbutton class onClick={nextpage}>Start!</Startbutton>
        <Ocean>
          <Wave></Wave>
          <Wave></Wave>
      </Ocean>
    </Wrap>
  )
}
