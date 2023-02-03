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
    props.setheadertextsize(e.target.name);

  }
  return (
    <Selectwrapper>
                    <Typeheader>7. Text Size</Typeheader>
                    <div ref={inputref}>
                      <Checkboxinput type="checkbox" name="40" onClick={(e) => {cancelcheck(e)}}/>XS
                      <Checkboxinput type="checkbox"  name="50" onClick={(e) => {cancelcheck(e)}}/>S
                      <Checkboxinput type="checkbox" name="60" onClick={(e) => {cancelcheck(e)}}/>M
                      <Checkboxinput type="checkbox" name="70" onClick={(e) => {cancelcheck(e)}}/>L
                      <Checkboxinput type="checkbox" name="90" onClick={(e) => {cancelcheck(e)}}/>XL     
                    </div >
                </Selectwrapper>
  )
}
