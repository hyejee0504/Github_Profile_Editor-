import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useState} from 'react';
import {Checkboxinput, Typeheader, Selectwrapper} from '../components/style';
import styled from 'styled-components'

const Completebutton = styled.button`
  display: block;
  margin: 5px;
  margin-right: 3px;
  margin-left: 10px; 
  font-weight: 600;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffffff;
`

export default function HeaderColor(props) {
  const [headtext, setHeadext] = useState("");
  const [text, setText] = useState("");

  const changeheader = (e) => {
    setHeadext(e.target.value)
  }

  const changetext = (e) => {
    let a = e.target.value.replaceAll("-", "<li>")
    setText(a.replaceAll(/\n/g, "</li>"))
  }

  const textchange = ()=>{
    props.setMyintroheader(headtext);
    props.setMyintro(text);
  }

  return (
    <Selectwrapper>
                    <Typeheader>1. 자기소개 제목 내용을 입력하세요.</Typeheader>
                    <Checkboxinput type="text" placeholder='자기소개제목 입력'  onChange={changeheader}/>
                    <Typeheader>2. 자기소개 내용을 입력하세요.</Typeheader>
                    <textarea placeholder='자기소개내용 입력
                    - 과 같이 시작해야합니다.
                    ex) - 저는 성장하는 것을 꾸준히 고민하는 개발자 입니다.'  onChange={changetext} style={{"margin": "5px",
    "margin-right": "3px",
    "margin-left": "10px", "width": "250px", "height": "150px"}}/>

                      <Completebutton onClick={textchange}> 입력완료 </Completebutton>
              
                </Selectwrapper>
  )
}
