import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef } from 'react';
import {Typeheader, Selectwrapper} from '../components/style';

export default function HeaderText(props) {
  const inputref = useRef();
  const cancelcheck = (e) => {
    // for(var i = 0; i < 6; i+=2){
    //   inputref.current.childNodes[i].checked = false;
    // }
    // e.target.checked = true;
    const a = e.target.value.replaceAll(" ", "%20");
    props.setheadertext(a);

  }
  return (
    <Selectwrapper>
                    <Typeheader>4. Text</Typeheader>
                    <div ref={inputref}>
                      <input type="text" name="small" onChange={(e) => {cancelcheck(e)}} placeholder='Header 입력 ex) Hello world!' style={{"width":"250px", "margin-left":"30px"}}/>
                    </div >
                </Selectwrapper>
  )
}
