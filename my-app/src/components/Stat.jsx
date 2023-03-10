import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef, useState, useEffect } from 'react';
import {Checkboxinput, Typeheader, Selectwrapper} from '../components/style';

export default function HeaderColor(props) {
  const [gradient, setGradient] = useState(180);
  const [textcolor, setTextcolor] = useState("000000");
  const [color, setColor] = useState("000000");
  const [color2, setColor2] = useState("");
  
  const ref1 = useRef();
  const ref2 = useRef();

  const cancelcheck = (e) => {

    if(e.target.name === "stat"){
      if(e.target.checked){
        props.setgithubstats(`<img src="https://github-readme-stats.vercel.app/api?username=${props.username}&custom_title=${props.username+"'s Github Stat"}&bg_color=${gradient},${color},${color2}&title_color=${textcolor}&text_color=${textcolor}"
        />`);
      }else{
        props.setgithubstats("");
      }}else{
        if(e.target.checked){
          props.setmostusedlanguage(`<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${props.username}&layout=compact&bg_color=${gradient},${color},${color2}&title_color=${textcolor}&text_color=${textcolor}"
          />`);
        }else{
          props.setmostusedlanguage("");
      }
      
    }

    
  }

  const changetextcolor =(e) => {
    for(var i = 0; i < 6; i+=1){
      ref2.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    if(e.target.name === "white"){
      // eslint-disable-next-line no-undef
      setTextcolor("ffffff");
    }else if(e.target.name === "black"){
      setTextcolor("000000");
    }else{
      setTextcolor(e.target.value.slice(1));
    }
  }
  
  

const changebgcolor = (e) =>{
  for(var i = 0; i < 15; i+=3){
    ref1.current.childNodes[i].checked = false;
  }
  e.target.checked = true;
  if(e.target.name === "onecolor"){
    // eslint-disable-next-line no-undef
    setColor(e.target.value.slice(1));
    setColor2("00000000");
    setGradient(180);
  }else if(e.target.name === "gradient1"){
    setColor(e.target.value.slice(1));
    setGradient(60);
  }else if(e.target.name === "gradient2"){
    setColor2(e.target.value.slice(1));
    setGradient(60);
  }else{
    setColor("00000000");
    setGradient(180);
  }
}

useEffect(()=>{
  props.setgithubstats(`<img src="https://github-readme-stats.vercel.app/api?username=${props.username}&bg_color=${gradient},${color},${color2}&title_color=${textcolor}&text_color=${textcolor}"
         />`);
        props.setmostusedlanguage(`<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${props.username}&layout=compact&bg_color=${gradient+","}${color}${","+color2}&title_color=${textcolor}&text_color=${textcolor}"
           />`);

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [color, textcolor, gradient, color2])



  return (
    <Selectwrapper>
                    <Typeheader>1. ????????? ????????? ???????????????. </Typeheader>
                    <div>
                      <Checkboxinput type="checkbox" name="stat"  onClick={(e) => {cancelcheck(e)}}/>Github Stat
                      <Checkboxinput type="checkbox"  name="language" onClick={(e) => {cancelcheck(e)}}/>Most used language
                    </div >
                    <Typeheader>2. Background Color </Typeheader>
                    <div ref={ref1}>
                      <Checkboxinput type="color" name="onecolor"  onChange={changebgcolor}/>????????? ?????? ??????
                      <br></br>
                      <p style={{margin : "5px 0px","margin-top":"10px", "font-weight" : "600"}}>??? ?????????????????? ??? ????????? ??????????????????.</p>
                      <br></br>
                      <Checkboxinput type="color"  name="gradient1" onChange={changebgcolor}/>????????? ?????? ??????????????? 1
                      <br></br>
                      <Checkboxinput type="color"  name="gradient2" onChange={changebgcolor}/>????????? ?????? ??????????????? 2
                      <br></br>
                      <Checkboxinput type="checkbox"  name="trans" onClick={changebgcolor}/>??????
                    </div >
                    <Typeheader>3. Text Color </Typeheader>
                    <div ref={ref2}>
                      <Checkboxinput type="checkbox" name="white"  onClick={changetextcolor}/>??????
                      <Checkboxinput type="checkbox"  name="black" onClick={changetextcolor}/>?????????
                      <Checkboxinput type="color"  name="textcolor" onChange={changetextcolor}/>????????? ?????? ??????
                    </div >
                </Selectwrapper>
  )
}
