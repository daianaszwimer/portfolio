import React, { useState } from 'react'
import './App.css';
import { themes, backgroundColor, textColor } from './themes/themeContext'
import styled, { ThemeProvider } from "styled-components";
import ThemeToggle from './components/ThemeToggle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

function App() {

  const [ theme, setTheme ] = useState(themes.light)

  const toggleTheme = () => {setTheme(prevTheme => prevTheme === themes.light ? themes.dark : themes.light)}

  return (
      <ThemeProvider theme={{theme}}>
        <Container>
            <ThemeToggle handleToggle={toggleTheme}/>
        </Container>
      </ThemeProvider>
  );
}

export default App;
