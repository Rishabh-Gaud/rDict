import './App.css';
import axios from "axios";
import {useEffect, useState} from 'react';
import {Container, withStyles, Switch} from "@material-ui/core"
import Header from './header/Header';
import Defination from './Components/defination/Defination';
import { grey } from '@material-ui/core/colors';

function App() {
  const [word,setWord] = useState("");
  const [select,setSelect] = useState("en");  
  const [meaning,setMeaning] = useState([]);
  const [lightMode,setLightMode] = useState(false);

  const DarkSwitch = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

 
  useEffect(()=>{
    const dictionaryApi = async()=>{
   
      try {
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${select}/${word}`)
        setMeaning(res.data);
      } catch (error) {
        
      }
    }
    dictionaryApi();
  },[word,select])

  
  return (
    <div className="App" style={{
      backgroundColor:lightMode?"#fff":"#282c34",
      color:!lightMode?"white":"black",
      transform:"all 0.5s linear",
    }}>
    <Container maxWidth="md"
    className="Box" >
    <div style={{position:"absolute", top:0 , right:6, paddingTop:5,}}>
      {lightMode?"Dark Mode":"Light Mode"}
      <DarkSwitch checked={lightMode} onChange={()=>setLightMode(!lightMode)} />
    </div>

     <Header select={select}
      setSelect={setSelect}
       word={word} 
       setWord={setWord}
       lightMode={lightMode} />
    <Defination word={word} select={select} meaning={meaning}  lightMode={lightMode}  />
    </Container>
    </div>
  );
}

export default App;
