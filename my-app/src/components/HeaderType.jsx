import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';
import {Checkboxinput, Typeheader} from '../components/style';

export default function HeaderType(props) {
  const inputref = useRef()
  const cancelcheck = (e) => {
    for(var i = 0; i < 19; i+=2){
      inputref.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    props.setheadertype(e.target.name);

  }
  return (
    <>
                    <Typeheader>1. Type</Typeheader>
                    <div ref={inputref}>
                      <Checkboxinput type="checkbox" name="wave" onClick={(e) => {cancelcheck(e)}}/>Wave
                      <Checkboxinput type="checkbox"  name="egg" onClick={(e) => {cancelcheck(e)}}/>Egg
                      <Checkboxinput type="checkbox" name="shark" onClick={(e) => {cancelcheck(e)}}/>Shark
                      <Checkboxinput type="checkbox" name="slice" onClick={(e) => {cancelcheck(e)}}/>Slice
                      <Checkboxinput type="checkbox" name="rect" onClick={(e) => {cancelcheck(e)}}/>Rect
                      <br></br>
                      <Checkboxinput type="checkbox" name="soft" onClick={(e) => {cancelcheck(e)}}/>Soft
                      <Checkboxinput type="checkbox" name="rounded" onClick={(e) => {cancelcheck(e)}}/>Rounded
                      <Checkboxinput type="checkbox" name="cylinder" onClick={(e) => {cancelcheck(e)}}/>Cylinder
                      <Checkboxinput type="checkbox" name="waving" onClick={(e) => {cancelcheck(e)}}/>Waving
                      <Checkboxinput type="checkbox" name="transparent" onClick={(e) => {cancelcheck(e)}}/>Transparent
                    </div >
                </>
  )
}
