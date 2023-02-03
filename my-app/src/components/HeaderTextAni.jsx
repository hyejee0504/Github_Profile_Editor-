import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';
import {Checkboxinput, Typeheader, Selectwrapper} from '../components/style';

export default function HeaderColor(props) {
  const inputref = useRef();

  const cancelcheck = (e) => {
    for(var i = 0; i < 10; i+=2){
      inputref.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    props.setheadertextanimation(e.target.name);

  }
  return (
    <Selectwrapper>
                    <Typeheader>5. Text Animation</Typeheader>
                    <div ref={inputref}>
                    <Checkboxinput type="checkbox" name="" onClick={(e) => {cancelcheck(e)}}/>없음
                      <Checkboxinput type="checkbox" name="fadeIn" onClick={(e) => {cancelcheck(e)}}/>FadeIn
                      <Checkboxinput type="checkbox"  name="scaleIn" onClick={(e) => {cancelcheck(e)}}/>ScaleIn
                      <Checkboxinput type="checkbox" name="blink" onClick={(e) => {cancelcheck(e)}}/>Blink
                      <Checkboxinput type="checkbox" name="blinking" onClick={(e) => {cancelcheck(e)}}/>Blinking
                      <Checkboxinput type="checkbox" name="twinkling" onClick={(e) => {cancelcheck(e)}}/>Twinkling
                    </div >
                </Selectwrapper>
  )
}
