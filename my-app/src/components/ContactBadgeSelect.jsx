import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef, useState, useEffect } from 'react';
import {Checkboxinput, Typeheader, Selectwrapper} from '../components/style';
import styled from 'styled-components';

const Urlinput = styled.input`
  margin-left: 10px;  
`
export default function HeaderColor(props) {
  const colorArr = {"Facebook" : "1877F2", 
  "Instagram": "E4405F",
"Velog": "20C997",
"Naver": "03C75A",
"Tistory": "000000",
"Notion": "000000",
"Gmail": "EA4335",
  }

  
  const [badgeArr, setBadgeArr] = useState([]);
  const [checkArr, setCheckArr] = useState({Facebook: false, Instagram: false, Velog: false, Naver: false, Tistory:false, Notion: false, Gmail: false});
  const [linkArr, setLinkArr] = useState({Facebook: "", Instagram: "", Velog: "", Naver: "", Tistory: "", Notion: "", Gmail: ""});
  const inputref = useRef();
  

  const cancelcheck = (e) => {
    if(e.target.name === "githubbadge" && e.target.checked){
      props.setGithubhitbadge(`<a href="https://hits.seeyoufarm.com"> <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2F${props.username}%2F&count_bg=%23000000&title_bg=%23000000&icon=github.svg&icon_color=%23FFFFFF&title=GitHub&edge_flat=false"/></a>
      `)
    }else if(e.target.name === "githubbadge"){
      props.setGithubhitbadge("");
    }
    else{
      if(e.target.checked){
        setBadgeArr(badgeArr => [...badgeArr, e.target.name]);
        setCheckArr(checkArr => ({...checkArr, [e.target.name]: true }))
        
      }else{
        setBadgeArr(badgeArr => badgeArr.filter(value => value !== e.target.name));
        setCheckArr(checkArr => ({...checkArr, [e.target.name] : false }))
      }

    }

    
  }
  
  

  useEffect(() => {
    let badgeText = ""
    for(var i in badgeArr){
      if(badgeArr[i] === "Gmail"){
        badgeText += `<a href=mailto:${linkArr[badgeArr[i]]}> <img src="https://img.shields.io/badge/${badgeArr[i]}-${colorArr[badgeArr[i]]}?style=${props.badgestyle}&logo=${badgeArr[i]}&logoColor=white&link=mailto:${linkArr[badgeArr[i]]}"> </a>
         `  
      }else{
        badgeText += `<a href=${linkArr[badgeArr[i]]}> <img src="https://img.shields.io/badge/${badgeArr[i]}-${colorArr[badgeArr[i]]}?style=${props.badgestyle}&logo=${badgeArr[i]}&logoColor=white&link=${linkArr[badgeArr[i]]}"> </a>
         ` 
      }
    }
    props.setContactAllBadge(badgeText);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [badgeArr, linkArr, props.badgestyle])

const changeurl = (e) => {
  setLinkArr(linkArr => ({...linkArr, [e.target.name]: e.target.value }))
}

  return (
    <Selectwrapper>
                    <Typeheader>1. 본인을 나타내고 연락할 수 있는 방법을 모두 선택해주세요.</Typeheader>
                    <div ref={inputref}>
                      <Checkboxinput type="checkbox" name="Facebook"  onClick={(e) => {cancelcheck(e)}}/>Facebook
                      {checkArr.Facebook ? <Urlinput type="text" name="Facebook" placeholder='Facebook url 입력' onChange={changeurl}/> : null}
                      <br></br>
                      <Checkboxinput type="checkbox"  name="Instagram" onClick={(e) => {cancelcheck(e)}}/>Instagram
                      {checkArr.Instagram ? <Urlinput type="text" name="Instagram" placeholder='Instagram url 입력' onChange={changeurl}/> : null}
                      <br></br>
                      <Checkboxinput type="checkbox"  name="Velog" onClick={(e) => {cancelcheck(e)}}/>Velog
                      {checkArr.Velog ? <Urlinput type="text" name="Velog" placeholder='Velog url 입력' onChange={changeurl}/> : null}
                      <br></br>
                      <Checkboxinput type="checkbox" name="Naver" onClick={(e) => {cancelcheck(e)}}/>Naver blog
                      {checkArr.Naver ? <Urlinput type="text" name = "Naver" placeholder='Naver blog url 입력' onChange={changeurl}/> : null}
                      <br></br>
                      <Checkboxinput type="checkbox" name="Tistory" onClick={(e) => {cancelcheck(e)}}/>Tistory
                      {checkArr.Tistory ? <Urlinput type="text" name="Tistory" placeholder='Tistory url 입력' onChange={changeurl}/> : null}
                      <br></br>
                      <Checkboxinput type="checkbox" name="Notion" onClick={(e) => {cancelcheck(e)}}/>Notion
                      {checkArr.Notion ? <Urlinput type="text" name="Notion" placeholder='Notion url 입력' onChange={changeurl}/> : null}
                      <br></br>
                      <Checkboxinput type="checkbox" name="Gmail" onClick={(e) => {cancelcheck(e)}}/>Gmail
                      {checkArr.Gmail ? <Urlinput type="text" name="Gmail" placeholder='Gmail url 입력' onChange={changeurl}/> : null}

                    </div >
                    <Checkboxinput type="checkbox" name="githubbadge"  onClick={(e) => {cancelcheck(e)}}/>Github 방문자수 뱃지
                </Selectwrapper>
  )
}
