import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../pages/style.css';
import styled from 'styled-components';
import {Checkboxinput, Typeheader, Selectwrapper} from '../components/style.jsx';
import header from '../asset/header.svg';
import intro from '../asset/intro.png';
import skill from '../asset/skill.png';
import contact from '../asset/contact.png';
import stat from '../asset/stat.svg';

const Nextbutton = styled.button`
    width: 150px;
    height: 80px;
    font-size: 40px;
    font-family: 'Baloo Paaji', cursive;
    border: 0;
    border-radius: 40px;
    background-color: #ffd875;
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

const Eximg = styled.img`
    width: 400px;
    margin-left: 100px;
    margin-bottom: 20px;
`

const SelectWrap = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
`

export default function FirstStep() {
    const [username, setUsername] = useState("");
    const [headerchecked, setHeaderchecked] = useState(false);
    const [introductionchecked, setIntroductionchecked] = useState(false);
    const [skillstackschecked, setSkillstackschecked] = useState(false);
    const [contactchecked, setContactchecked] = useState(false);
    const [statschecked, setStatschecked] = useState(false);

    const navigate = useNavigate();
    const nextpage = () => {
        if(username === ""){
            alert("Username을 입력해주세요.")

        }else{
            navigate("../secondstep", {
                state: {
                  username: username,
                  headerchecked: headerchecked,
                  introductionchecked: introductionchecked,
                  skillstackschecked: skillstackschecked,
                  contactchecked: contactchecked,
                  statschecked: statschecked
    
                }})

        }
        
    }

    //username input값이 바뀔때마다 변수가 바뀌게 하는 함수
    const changeusername = (e) => {
        setUsername(e.target.value);
    }

    const checkchecked = (e) => {
        
            if(e.target.name === "header"){
                if(e.target.checked){
                    setHeaderchecked(true);
                }else{
                    setHeaderchecked(false);
                }
            }else if(e.target.name === "introduction"){
                if(e.target.checked){
                    setIntroductionchecked(true);
                }else{
                    setIntroductionchecked(false);
                } 
            }else if(e.target.name === "skillstack"){
                if(e.target.checked){
                    setSkillstackschecked(true);
                }else{
                    setSkillstackschecked(false);
                }
            }else if(e.target.name === "contact"){
                if(e.target.checked){
                    setContactchecked(true);
                }else{
                    setContactchecked(false);
                }
            }else{
                if(e.target.checked){
                    setStatschecked(true);
                }else{
                    setStatschecked(false);
                }
            }

        
        
        
    }

  return (
    <div style={{"position" : "relative"}}>
        <Selectwrapper>
            <Typeheader>1. 본인의 Github username을 입력하세요.</Typeheader>
            <Checkboxinput type="text" placeholder='username을 입력하세요.' onChange={changeusername}/>
        </Selectwrapper>
       <Selectwrapper>
            <Typeheader>2. Profile에 추가하고 싶은 내용을 선택하세요.</Typeheader>
                <SelectWrap>
                    <Checkboxinput type="checkbox" name='header' onClick={checkchecked} />헤더
                    <Eximg src={header} alt='헤더'/>
                </SelectWrap>
                <br />
                <SelectWrap>
                    <Checkboxinput type="checkbox" name='introduction' onClick={checkchecked}/>자기소개
                    <Eximg src={intro} alt='자기소개'/>
                </SelectWrap>
                <br />
                <SelectWrap>
                    <Checkboxinput type="checkbox" name='skillstack' onClick={checkchecked}/>기술스택
                    <Eximg src={skill} alt='기술스택'/>
                </SelectWrap>
                <br />
                <SelectWrap>
                    <Checkboxinput type="checkbox" name='contact' onClick={checkchecked}/>블로그, 이메일, link연결 페이지
                    <Eximg  src={contact} alt='연락방법'/>
                </SelectWrap>
                <br />
                <SelectWrap>
                    <Checkboxinput type="checkbox" name='stat' onClick={checkchecked}/>Github Stat
                    <Eximg src={stat} alt='stat'/>
                    {/* <Eximg src={language} alt='most used language'/> */}
                </SelectWrap>
       </Selectwrapper>
        <Nextbutton onClick={nextpage}>Next</Nextbutton>
    </div>
    
  )
}
