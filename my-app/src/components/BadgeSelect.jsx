import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useRef, useState, useEffect } from 'react';
import {Checkboxinput, Typeheader, Selectwrapper} from '../components/style';
import styled from 'styled-components';

const Categorybutton = styled.button`
  border: 0;
  margin: 0 5px;
  border-radius: 10px;
  padding: 5px, 10px; 
  /* font-weight: 600; */
  color: #ffffff;
  font-size: 13px;
  display:inline-block;
`

const BadgeWrap = styled.div`
     margin: 5px;
    margin-right: 10px;
    margin-left: 10px;
    /* width: 100px; */
`
const Inputwrap = styled.div`
  display: inline-block;
`

const CategoryWrap = styled.div`
  margin: 5px;
    margin-right: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
`
export default function HeaderColor(props) {
  const colorArr = {"Amazon S3" : "569A31", 
  "Android": "3DDC84",
"AngularJS": "E23237",
"Apache Tomcat": "F8DC75",
"Apollo GraphQL": "311C87",
"Amazon AWS": "232F3E",
"Babel": "F9DC3E",
"Bitrise": "683D87",
"Bootstrap": "7952B3",
"C": "A8B9CC",
"C++": "00599C",
"CSS3": "1572B6",
"Django": "092E20",
"Discord": "5865F2",
"Docker": "2496ED",
"Elasticsearch": "005571",
"Eslint" : "4B32C3",
"Expo": "000020",
"Express" : "000000",
"Figma" : "F24E1E",
"Firebase": "FFCA28",
"Flask" : "000000",
"Flutter": "02569B",
"Gatsby" : "663399",
"GitHub Pages": "222222", 
"Git": "F05032",
"Github" : "181717",
"Go" : "00ADD8",
"GraphQL" : "E10098", 
"Gulp" :"CF4647",
"HTML5": "E34F26",
"Heroku": "430098",
"Hyperledger": "2F3134",
"IOS" : "000000",
"jQuery" : "0769AD",
"Java" : "007396",
"Javascript": "F7DF1E", 
"Jenkins": "D24939",
"Keras": "D00000",
"Linux" : "FCC624",
"MariaDB" : "003545",
"MongoDB" : "47A248",
"MySQL":"4479A1",
"Netlify" : "00C7B7",
"Next.js" : "000000",
"Node.js":"339933",
"Notion" : "000000",
"Oracle" : "F80000",
"Prettier": "F7B93E",
"Prisma" :"2D3748",
"Pug": "A86454", 
"Python": "3776AB",
"PyTorch" : "EE4C2C",
"React" : "61DAFB",
"ReactNative" : "61DAFB",
"ReactiveX": "B7178C",
"Redux" : "764ABC",
"ReduxSaga": "999999",
"Sass" : "CC6699",
"Selenium" : "43B02A",
"Slack":"4A154B",
"Spring" : "6DB33F",
"Spring Boot" : "6DB33F",
"StyledComponents": "DB7093",
"Swift" : "F05138",
"Tailwind CSS": "06B6D4",
"Tensorflow": "FF6F00",
"Trello" : "0052CC",
"Vercel" : "000000",
"Vue.js" : "4FC08D",
"Zeplin": "fdbd39",
"Matlab": "0076a8"



  }


  const [badgeArr, setBadgeArr] = useState([]);
  const [alphabet, setAlphabet] = useState("");
  const [style, setStyle] = useState("for-the-badge");
  // const inputref = useRef();
  const inputref1 = useRef();

  const cancelcheck = (e) => {
    if(e.target.checked){
      setBadgeArr(badgeArr => [...badgeArr, e.target.name]);
      e.target.checked = true;
    }else{
      setBadgeArr(badgeArr => badgeArr.filter(value => value !== e.target.name));
      e.target.checked = false;
    }
  }

  let allbadge = [];
  for(var i in colorArr){
    allbadge.push(
      <Inputwrap>
        <Checkboxinput type="checkbox" name={i} onClick={(e) => {cancelcheck(e)} }checked={false} /> {i}
      </Inputwrap>
    )
  }

  const stylecheck = (e) => {
    for(var i = 0; i < 10; i+=2){
      inputref1.current.childNodes[i].checked = false;
    }
    e.target.checked = true;
    if(e.target.checked){
      setStyle(e.target.name);
      props.setBadgestyle(e.target.name);
    }
  }
  
  const resetCheck = () => {
    setBadgeArr([]);
    setabc(allbadge);
  }

  useEffect(() => {
    let badgeText = ""
    for(var i in badgeArr){
      if(badgeArr[i] === "ReactNative"){
        badgeText += `<img src="https://img.shields.io/badge/ReactNative-61DAFB?style=${style}&logo=React&logoColor=white">
          `
      }else if(badgeArr[i] === "C++"){
        badgeText += `<img src="https://img.shields.io/badge/${badgeArr[i]}-${colorArr[badgeArr[i]]}?style=${style}&logo=C%2B%2B&logoColor=white">
          `
      }
      else{
        badgeText += `<img src="https://img.shields.io/badge/${badgeArr[i]}-${colorArr[badgeArr[i]]}?style=${style}&logo=${badgeArr[i]}&logoColor=white">
          `
      }
      if(i === 4 || i%5 === 4){
          badgeText += "<br/>";
      }
      
    }
    props.setAllBadge(badgeText);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [badgeArr, style])

  const filteralphabet = (e) => {
    if(e.target.name === "a"){
      setAlphabet("a")
    }else if(e.target.name === "h"){
      setAlphabet("h")
    }else if(e.target.name === "o"){
      setAlphabet("o")
    }else if(e.target.name === "v"){
      setAlphabet("v")
    }else{
      setAlphabet("all")
    }
    
  }
  const [abc, setabc] = useState([]);

  useEffect(()=> {
    if(alphabet === "a"){
      let d = allbadge.filter(value => value.props.children[2].match(/^[A-G]/))
      if(badgeArr.length > 0){
        let w = []
        for(var i in badgeArr){
          for(var j in d){
            if(d[j].props.children[2] === badgeArr[i]){
              w.push(j);
            }}
        }
        for(var z in w){
          d[w[z]] = (<Inputwrap><Checkboxinput type="checkbox" name={d[w[z]].props.children[2]} onClick={(e) => {cancelcheck(e)} }checked={true} /> {d[w[z]].props.children[2]}</Inputwrap>)
        }
          setabc(d);}
          else{
            setabc(d);
          }    
    }else if(alphabet === "h"){
      const e = allbadge.filter(value => value.props.children[2].match(/^[H-N]/))
      if(badgeArr.length > 0){
        let w = []
        for(var a in badgeArr){
          for(var b in e){
            if(e[b].props.children[2] === badgeArr[a]){
              w.push(b);
            }}
        }
        for(var c in w){
          e[w[c]] = (<Inputwrap><Checkboxinput type="checkbox" name={e[w[c]].props.children[2]} onClick={(e) => {cancelcheck(e)} }checked={true} /> {e[w[c]].props.children[2]}</Inputwrap>)
        }
          setabc(e);}
          else{
            setabc(e);
          }
    }else if(alphabet === "o"){
      const f = allbadge.filter(value => value.props.children[2].match(/^[O-U]/))
      if(badgeArr.length > 0){
        let w = []
        for(var d in badgeArr){
          for(var g in f){
            if(f[g].props.children[2] === badgeArr[d]){
              w.push(g);
            }}
        }
        for(var h in w){
          f[w[h]] = (<Inputwrap><Checkboxinput type="checkbox" name={f[w[h]].props.children[2]} onClick={(e) => {cancelcheck(e)} }checked={true} /> {f[w[h]].props.children[2]}</Inputwrap>)
        }
          setabc(f);}
          else{
            setabc(f);
          }
    }else if(alphabet === "v"){
      const g = allbadge.filter(value => value.props.children[2].match(/^[V-Z]/))
      if(badgeArr.length > 0){
        let w = []
        for(var k in badgeArr){
          for(var l in g){
            if(g[l].props.children[2] === badgeArr[k]){
              w.push(l);
            }}
        }
        for(var m in w){
          g[w[m]] = (<Inputwrap><Checkboxinput type="checkbox" name={g[w[m]].props.children[2]} onClick={(e) => {cancelcheck(e)} }checked={true} /> {g[w[m]].props.children[2]}</Inputwrap>)
        }
          setabc(g);}
          else{
            setabc(g);
          }
    }
    else{
      let all = allbadge;
      if(badgeArr.length > 0){
        
        let w = []
        for(var o in badgeArr){
          for(var p in all){
            if(all[p].props.children[2] === badgeArr[o]){
              w.push(p);
            }}
        }
        for(var q in w){
          all[w[q]] = (<Inputwrap><Checkboxinput type="checkbox" name={all[w[q]].props.children[2]} onClick={(e) => {cancelcheck(e)} }checked={true} /> {all[w[q]].props.children[2]}</Inputwrap>)
        }
          setabc(all);}
          else{
            setabc(all);
          }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alphabet, badgeArr])

  

  return (
    <Selectwrapper>
                    <Typeheader>1. 본인이 보유한 기술 스택을 모두 선택해주세요.</Typeheader>
                   <CategoryWrap>
                      <Categorybutton style={{"background-color": "#ee8383", "padding": "5px, 10px"}} name='a' onClick={filteralphabet}>A - G</Categorybutton>
                      <Categorybutton style={{"background-color": "#fadd7e"}} name='h' onClick={filteralphabet}>H - N</Categorybutton>
                      <Categorybutton style={{"background-color": "#96f07b"}} name='o' onClick={filteralphabet}>O - U</Categorybutton>
                      <Categorybutton style={{"background-color": "#83a5ee"}} name='v' onClick={filteralphabet}>V - Z</Categorybutton>
                      <Categorybutton style={{"background-color": "#af83ee"}} name='all' onClick={filteralphabet}>전체</Categorybutton>
                      <Categorybutton style={{"background-color": "#ee83d7"}} onClick={resetCheck}>초기화</Categorybutton>
                   </CategoryWrap>
                    
                      <BadgeWrap>{abc}</BadgeWrap>
                      
                      

                      <Typeheader>2. 기술 스택 뱃지의 스타일을 선택해주세요.</Typeheader>
                      <div ref={inputref1}>
                      <Checkboxinput type="checkbox" color="" name="plastic" onClick={stylecheck}/>Plastic
                      <Checkboxinput type="checkbox" color="" name="flat" onClick={stylecheck}/>Flat
                      <Checkboxinput type="checkbox" color="" name="flat-square" onClick={stylecheck}/>Flat-square
                      <Checkboxinput type="checkbox" color="" name="for-the-badge" onClick={stylecheck}/>For-the-badge
                      <Checkboxinput type="checkbox" color="" name="social" onClick={stylecheck}/>Social
                      </div>
                    
                </Selectwrapper>
  )
}
