import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef, useState, useEffect } from 'react';
import {Checkboxinput, Typeheader, Selectwrapper} from '../components/style';

export default function HeaderColor(props) {
  const [name, setName] = useState("");
  const inputref = useRef();
  const cancelcheck = (e) => {
    for(var i = 0; i < 4; i+=2){
      inputref.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    setName(e.target.name);
    if(e.target.name === "allcolor"){
      props.setheadertextcolor(e.target.value.slice(1));
  }else{
    props.setheadertextcolor(e.target.name);
  }
  }

  useEffect(() => {
    for(var i = 0; i < 4; i+=1){
      if(inputref.current.childNodes[i].name === name){
        inputref.current.childNodes[i].checked = true;
      }  
    }
  }, [name])


  return (
    <Selectwrapper>
                    <Typeheader>6. Text Color</Typeheader>
                    <div ref={inputref}>
                      <Checkboxinput type="checkbox" name="000000" onClick={(e) => {cancelcheck(e)}}/>Black
                      <Checkboxinput type="checkbox"  name="ffffff" onClick={(e) => {cancelcheck(e)}}/>White
                      <Checkboxinput type="color" name="allcolor" onChange={(e) => {cancelcheck(e)}}/>사용자 정의 단색
                      
                    </div >
                </Selectwrapper>
  )
}
