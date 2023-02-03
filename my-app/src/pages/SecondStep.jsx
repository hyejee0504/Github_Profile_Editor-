import {React, useState, useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Viewer} from '@toast-ui/react-editor';

import '../pages/style.css';
import styled from "styled-components";
import HeaderCheck from '../components/HeaderType';
import HeaderColor from "../components/HeaderColor";
import HeaderHeight from '../components/HeaderHeight';
import HeaderText from '../components/HeaderText';
import HeaderTextAni from '../components/HeaderTextAni';
import HeaderTextColor from '../components/HeaderTextColor';
import HeaderTextSize from '../components/HeaderTextSize';
import BadgeSelect from '../components/BadgeSelect';
import ContactBadgeSelect from '../components/ContactBadgeSelect';
import Introduction from '../components/Introduction';
import Stat from '../components/Stat';
import Align from '../components/Align';

import downpng from '../asset/icon-down-arrow.png';
import uppng from '../asset/icon-up-arrow.png';

import useCopyClipBoard from '../components/useCopyClipBoard';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
`


const SelectWrapper = styled.div`
    width: 60%;
    
    padding-right:15px;
    padding-left: 15px;
    position: relative;
`

const Topheader = styled.h2`
    position: relative;
    cursor: pointer;
`
const Downimg = styled.img`
    width: 25px;
    padding-top: 15px;
    position: absolute;
    top: -10px;
    right: 40px;
`

const HeadertypeWrapper = styled.div`
    margin-left: 20px;
`

const Completebutton = styled.button`
font-family: 'Baloo Paaji', cursive;
    width: 180px;
    /* height: 40px; */
    font-size: 30px;
    border: 0;
    border-radius: 40px;
    background-color: #ffd875;
    color: #000000;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 20px;
    z-index: 2;
    :hover{
    background-color: #6a9eff;}
    display: inline-block;
    text-align: center;
    margin-top: 30px;
`;

const Topbutton = styled.button`
    font-family: 'Baloo Paaji', cursive;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    position: fixed;
    bottom: 20px;  
    right: 30px;
    font-size: 25px;
    border: 0;
    background-color: #6a9eff;
    :hover{
    background-color: #ffd875}
    cursor: pointer;
    box-shadow: 12px 12px 2px 1px #c4c4c833;
    z-index: 50;
`;

const PreviewShow = styled.div`
    width: 100%;
    /* height: 60em; */
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    border-left: 2px solid black;
    background-color: ${props => props.bgColor};
`
const Darkbutton = styled.button`
    font-family: 'Baloo Paaji', cursive;
    width: 180px;
    /* height: 40px; */
    font-size: 30px;
    border: 0;
    border-radius: 40px;
    background-color: #ffd875;
    color: #000000;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 230px;
    z-index: 2;
    :hover{
    background-color: #6a9eff;}
    display: inline-block;
    text-align: center;
    margin-top: 30px;

`


export default function SecondStep() {
    

    const [value, setValue] = useState({header: "", skill: "", contact: "", introduce: "", stat: ""});
    const [headertyped, setHeadertyped] = useState("wave");
    const [color, setColor] = useState("#b897ff");
    const [height, setHeight] = useState(120);
    const [text, setText] = useState("");
    const [textanimation, setTextanimation] = useState("");
    const [fontcolor, setFontcolor] = useState("000000");
    const [fontsize, setFontsize] = useState(70);
    // const [fontalign, setFontalign] = useState(50);
    // const [gradient1, setGradient1] = useState("");
    // const [gradient2, setGradient2] = useState("");

    const [badge, setBadge] = useState("");
    const [badgestyle, setBadgestyle] = useState("for-the-badge");

    const [hitbadge, setHitBadge] = useState("");
    const [contactbadge, setContactBadge] = useState("");

    const [introductionheader, setIntroductionheader] = useState("");
    const [introduction, setIntroduction] = useState("");

    const [stats, setStats] = useState("");
    const [mostlanguage, setMostlanguage] = useState("");

    const [allalign, setAllalign] = useState("left");
    const [align, setAlign] = useState("left");
    const [badgealign, setBadgealign] = useState("");
    
    const [headeractive, setHeaderactive] = useState(false);
    const [introactive, setIntroactive] = useState(false);
    const [skillactive, setSkillactive] = useState(false);
    const [contactactive, setContactactive] = useState(false);
    const [statactive, setStatactive] = useState(false);
    const [alignacitve, setAlignacitve] = useState(false);



    const [a, setA] = useState([]);
    const [completetext, setCompletetext] = useState("");
    
    const headerbutton = useRef();
    const introbutton = useRef();
    const skillbutton = useRef();
    const contactbutton = useRef();
    const statbutton = useRef();
    const alignbutton = useRef();


    const ref = useRef();
    const ref1 = useRef();
    const ref2= useRef();
    const ref3= useRef();
    const ref4= useRef();
    const buttonref = useRef();




    const location = useLocation();

    const username = location.state.username;
    const headerchecked = location.state.headerchecked;
    const introductionchecked = location.state.introductionchecked;
    const skillstackschecked = location.state.skillstackschecked;
    const contactchecked = location.state.contactchecked;
    const statschecked = location.state.statschecked;

    const [lightMode, setLightMode] = useState(true);
    //   const [darkMode, setDarkMode] = useState(false);
      const [darkMode, setDarkMode] = useState("light");
      const [dark, setDark] = useState("");
      const [darkborder, setDarkborder] = useState("#d8dee4");
      const [darkfont, setDarkfont] = useState("#282d33");

    const headerdefault = 
    `<div align= "center">
    <img src="https://capsule-render.vercel.app/api?type=${headertyped}&color=${color}&height=${height}&text=${text}&animation=${textanimation}&fontColor=${fontcolor}&fontSize=${fontsize}" />
    </div>
    `
    const skilldefault = 
    `<div style="text-align: ${allalign};">
    <h2 style="border-bottom: 1px solid ${darkborder}; color: ${darkfont};"> 🛠️ Tech Stacks </h2> <br> 
    <div style="margin: ${badgealign}; text-align: ${align};" "text-align: ${align};"> ${badge}</div>
    </div>
    `
    const contactdefault = 
    `<div style="text-align: ${allalign};">
    <h2 style="border-bottom: 1px solid ${darkborder}; color: ${darkfont};"> 🧑‍💻 Contact me </h2> <br> 
    <div style="text-align: ${align};"> ${contactbadge} </div>  <br> 
    <div style="text-align: ${align};"> ${hitbadge} </div> 
    </div>
    `
    const introductiondefault = 
    `<div style="text-align: ${allalign};"> 
    <h2 style="border-bottom: 1px solid ${darkborder}; color: ${darkfont};"> ${introductionheader} </h2>  
    <div style="font-weight: 700; font-size: 15px; text-align: ${allalign}; color: ${darkfont};"> ${introduction} </div> 
    </div>
    `
    const statdefault = 
    `<div style="text-align: ${allalign};"> 
    <h2 style="border-bottom: 1px solid ${darkborder}; color: ${darkfont};"> 🏅 Stats </h2> <div style="text-align: ${align};"> ${stats} ${mostlanguage} </div> 
    </div>
    `

    const headerdesignactive  = () => {
        if(headeractive === false){
            setHeaderactive(true);
            headerbutton.current.src = uppng;
        }else{
            setHeaderactive(false);
            headerbutton.current.src = downpng;
        }
    }

    const skilldesignactive  = () => {
        if(skillactive === false){
            setSkillactive(true);
            skillbutton.current.src = uppng;
        }else{
            setSkillactive(false);
            skillbutton.current.src = downpng;
        }
    }

    const contactdesignactive  = () => {
        if(contactactive === false){
            setContactactive(true);
           contactbutton.current.src = uppng;
        }else{
            setContactactive(false);
            contactbutton.current.src = downpng;
        }
    }

    const introducedesignactive  = () => {
        if(introactive === false){
            setIntroactive(true);
            introbutton.current.src = uppng;
        }else{
            setIntroactive(false);
            introbutton.current.src = downpng;
        }
    }

    const statdesignactive  = () => {
        if(statactive === false){
            setStatactive(true);
            statbutton.current.src = uppng;
        }else{
            setStatactive(false);
            statbutton.current.src = downpng;
        }
    }

    const aligndesignactive  = () => {
        if(alignacitve === false){
            setAlignacitve(true);
            alignbutton.current.src = uppng;
        }else{
            setAlignacitve(false);
            alignbutton.current.src = downpng;
        }
    }


    useEffect(() => {
        if(headerchecked){
            // ref.current.getInstance().setMarkdown("");
            setValue(prev => ({...prev, header: headerdefault}))
        }else{
            setValue(prev => ({...prev, header: ""}))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [headerdefault, headeractive])

    useEffect(() => {
        if(skillstackschecked){
            // ref.current.getInstance().setMarkdown("");
            setValue(prev => ({...prev,skill: skilldefault}))
        }else{
            setValue(prev => ({...prev, skill: ""}))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [skilldefault])

    useEffect(() => {
        if(contactchecked){
            // ref.current.getInstance().setMarkdown("");
            setValue(prev => ({...prev, contact: contactdefault}))
        }else{
            setValue(prev => ({...prev, contact: ""}))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contactdefault])

    useEffect(() => {
        if(introductionchecked){
            // ref.current.getInstance().setMarkdown("");
            setValue(prev => ({...prev, introduce: introductiondefault}))
        }else{
            setValue(prev => ({...prev, introduce: ""}))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [introductiondefault])

    useEffect(() => {
        if(statschecked){
            // ref.current.getInstance().setMarkdown("");
            setValue(prev => ({...prev, stat: statdefault}))
        }else{
            setValue(prev => ({...prev, stat: ""}))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [statdefault]);



    useEffect(() => {
        let copy = [...a];
        copy[0] = value.header;
        copy[1] = value.introduce;
        copy[2] = value.skill;
        copy[3] = value.contact; 
        copy[4] = value.stat;
        setA(copy);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [value.header, value.skill, value.contact, value.introduce, value.stat])

    useEffect(() => {
        // ref.current.getInstance().setMarkdown("");
        let b = "";
        for (var i in a){
            b += a[i];
        }
        
        // ref.current.getInstance().setMarkdown("");
        ref.current.getInstance().setMarkdown(a[0]);
        ref1.current.getInstance().setMarkdown(a[1]);
        ref2.current.getInstance().setMarkdown(a[2]);
        ref3.current.getInstance().setMarkdown(a[3]);
        ref4.current.getInstance().setMarkdown(a[4]);
        setCompletetext(b);
        }
    , [a])


    const setheadertype = (a) => {
        setHeadertyped(a);
    }

    const setheadercolor = (a) => {
        setColor(a);
    }

    const setheaderheight = (a) => {
        setHeight(a);
    }

    const setheadertext = (a) => {
        setText(a);
    }

    const setheadertextanimation = (a) => {
        setTextanimation(a);
    }

    const setheadertextcolor = (a) => {
        setFontcolor(a);
    }

    const setheadertextsize = (a) => {
        setFontsize(a);
    }
    
    //기술스택 함수

    const setAllBadge = (a) => {
        setBadge(a);
    }

    //contact하는 부분 함수

    const setContactAllBadge = (b) => {
        setContactBadge(b);
    }

    const setGithubhitbadge = (b) => {
        setHitBadge(b);
    }

    //자기소개하는 함수
    const setMyintroheader = (c) => {
        setIntroductionheader(c);
    }

    const setMyintro = (c) => {
        setIntroduction(c);
    }

    //Stat, most used language 함수
    const setgithubstats = (c) => {
        setStats(c);
        console.log(c);
    }



    const setmostusedlanguage = (c) => {
        setMostlanguage(c);
    }

    //align 함수
    const setallalign = (a) => {
        setAllalign(a)
    }

    const setalign = (a) => {
        setAlign(a)
    }

    const setbadgealign = (a) => {
        setBadgealign(a)
    }

    // eslint-disable-next-line no-unused-vars
    const [isCopy, onCopy] = useCopyClipBoard();

  const handleCopyClipBoard = (text) => {
    let a = text.replaceAll(`style="text-align: center;"`, `align= "center"`);
    let b = a.replaceAll(`style="margin: ; text-align: center;"`, "");
    let c = b.replaceAll(`"text-align: center;"`, `align= "center"`);

    onCopy(c);
  };

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }



  const handleSwitchToggle = () => {
    if (!lightMode) {
      setLightMode(true);
      setDarkMode("#000000");
      setDark("#ffffff");
      setDarkborder("#d8dee4");
      setDarkfont("#282d33");
      buttonref.current.innerText = "DarkMode";
    } else {
      setLightMode(false);
      setDarkMode("#ffffff");
      setDark("#0d1117");
      setDarkborder("#21262d");
      setDarkfont("#c9d1d9");
      buttonref.current.innerText = "LightMode";
    }
  };

  

    
  return (
    <Wrapper>
                {/* 선택지 */}
                <SelectWrapper>
                    <Topheader style={{"font-size": "16px"}}>✅ 화살표 버튼을 누르면 펼쳐집니다. 다시 펼칠 때 초기화 됩니다.</Topheader>
                   {headerchecked&&
                        <>  
                            <Topheader onClick={headerdesignactive}>🎈  Header Design <Downimg ref={headerbutton} src={downpng} alt='아래버튼'/> </Topheader> 
                            {headeractive&&
                                <HeadertypeWrapper>
                                <HeaderCheck setheadertype={setheadertype}/>
                                <HeaderColor setheadercolor={setheadercolor}/>
                                <HeaderHeight setheaderheight={setheaderheight}/>
                                <HeaderText setheadertext={setheadertext}/>
                                <HeaderTextAni setheadertextanimation={setheadertextanimation}/>
                                <HeaderTextColor setheadertextcolor={setheadertextcolor}/>
                                <HeaderTextSize setheadertextsize={setheadertextsize}/>
                            </HeadertypeWrapper>}
                        </>
                   }
                   {introductionchecked&&
                        <>
                            <Topheader onClick={introducedesignactive}>🙌  Introduction Design <Downimg ref={introbutton} src={downpng} alt='아래버튼'/> </Topheader> 
                            {introactive&&
                            <HeadertypeWrapper>
                            <Introduction setMyintroheader={setMyintroheader} setMyintro={setMyintro}/>
                            </HeadertypeWrapper>
                            }
                        </>
                   }
                   {skillstackschecked&&
                        <>
                            <Topheader onClick={skilldesignactive}>🛠️ Skill Stack Design <Downimg ref={skillbutton} src={downpng} alt='아래버튼'/> </Topheader> 
                            {skillactive&&
                            <HeadertypeWrapper>
                            <BadgeSelect setAllBadge={setAllBadge} setBadgestyle={setBadgestyle}/>
                            </HeadertypeWrapper>
                            }
                        </>
                        
                   }
                   {contactchecked&&
                        <>
                            <Topheader onClick={contactdesignactive}>🧑‍💻  Contact Design <Downimg ref={contactbutton} src={downpng} alt='아래버튼'/> </Topheader> 
                            {contactactive&&
                            <HeadertypeWrapper>
                            <ContactBadgeSelect setContactAllBadge={setContactAllBadge} badgestyle={badgestyle} setGithubhitbadge={setGithubhitbadge} username={username} />
                            </HeadertypeWrapper>
                            }
                        </> 
                   }
                   {statschecked&&
                        <>
                            <Topheader onClick={statdesignactive} >🏅  Stat Design <Downimg ref={statbutton} src={downpng} alt='아래버튼'/> </Topheader> 
                            {statactive&&
                            <HeadertypeWrapper>
                            <Stat setgithubstats={setgithubstats} setmostusedlanguage={setmostusedlanguage} username={username}/>
                            </HeadertypeWrapper>
                            }
                        </>      
                   }
                   <>
                            <Topheader onClick={aligndesignactive} >💡  Align Design <Downimg ref={alignbutton} src={downpng} alt='아래버튼'/> </Topheader> 
                            {alignacitve&&
                            <HeadertypeWrapper>
                            <Align setallalign={setallalign} setalign={setalign} setbadgealign={setbadgealign}/>
                            </HeadertypeWrapper>
                            }
                        </>  
                        
                </SelectWrapper >
                {/* 미리보기 */}
                <PreviewShow bgColor={dark}>
                    <div style={{"background-color": dark}}>
                        <h2 style={{"font-size": "30px", "color" : darkMode}}>미리보기</h2>
                                <Viewer ref={ref} /> 
                                <Viewer ref={ref1} /> 
                                 <Viewer ref={ref2} /> 
                                 <Viewer ref={ref3} /> 
                                 <Viewer ref={ref4} />
                    </div>
                    <Darkbutton ref={buttonref} onClick={handleSwitchToggle}>
                   DarkMode
                    </Darkbutton>
                    
                         <Completebutton onClick={() => handleCopyClipBoard(completetext)}>Copy code!</Completebutton>
                         <Topbutton onClick={scrollToTop}>TOP</Topbutton>
                </PreviewShow>
                {/* <Editor initialValue={"asdfasdf"} theme={'dark'}/> */}
                
            </Wrapper>
           
        
  )
}
