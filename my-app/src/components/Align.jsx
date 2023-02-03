import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef} from 'react';
import {Checkboxinput, Typeheader, Selectwrapper} from './style';

export default function HeaderColor(props) {
  
  const ref1 = useRef();

const changealign = (e) =>{
  for(var i = 0; i < 5; i+=1){
    ref1.current.childNodes[i].checked = false;
  }
  e.target.checked = true;
  if(e.target.name === "allleft"){
    props.setallalign("left");
    props.setalign("left");
    props.setbadgealign("");
  }else if(e.target.name === "allcenter"){
    props.setallalign("center");
    props.setalign("center");
    props.setbadgealign("0 auto");
  }else {
    props.setallalign("left");
    props.setalign("center");
    props.setbadgealign("");
  }
}


  return (
    <Selectwrapper>
                    <Typeheader>전체적인 정렬을 선택해주세요.</Typeheader>
                    <div ref={ref1}>
                      <Checkboxinput type="checkbox" name="allleft"  onClick={changealign}/>전체 좌측 정렬
                      <Checkboxinput type="checkbox" name="allcenter"  onClick={changealign}/>전체 가운데 정렬
                      <Checkboxinput type="checkbox"  name="center" onClick={changealign}/>내용만 가운데 정렬
                    </div >  
                </Selectwrapper>
  )
}
