import React from 'react'
import './header.css'
import {createTheme, MenuItem, TextField, ThemeProvider} from "@material-ui/core"
import data from "../data";
const Header = ({select, setSelect,word,setWord, lightMode}) => {
    const darkTheme = createTheme({
        palette: {
            primary:{
                main:lightMode?"#fff":"#000",
            },
          type: lightMode?'light':'dark',
        },
      });

      const handleChange=(language)=>{
            setSelect(language);
            setWord("")

      }
    return (
        <div className="Header">
            <span className="title">{word?word:"rDictionary"}</span>
            <div className="input">
        <ThemeProvider theme = {darkTheme}>

        <TextField className="search"  
            value={word}
            onChange={(e)=>(setWord(e.target.value))}
            label="Search a word" />
        <TextField
          select
          className="txtarea"
          label="Language"
          value={select}
          onChange={(e)=>(handleChange(e.target.value))}
          helperText="Please select your Language"
        >
            {
                data.map((select)=>(
                    
                    <MenuItem key={select.label} value={select.label} >{select.value}</MenuItem>

                ))
            }
          
        </TextField>
        </ThemeProvider>
            </div>
        </div>
       
    )
}

export default Header
