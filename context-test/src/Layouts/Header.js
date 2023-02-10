import React from 'react'
import { useContext } from 'react'
import { ThemeContext, NewsDataContext } from '../Utilities/Contexts'

export default function Header() {
    const {theme, setTheme } = useContext(ThemeContext);
    const { newsData } = useContext(newsData);

  return (
    <div className={theme}>
        <div style={{ color: theme == "bg-dark" ? "white" : "black"}}>
            <h1>Welcome</h1>
        </div> 
        <div>

        </div>
    
    
    </div>
     
  )
}
