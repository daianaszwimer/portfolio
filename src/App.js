import React, {useState} from 'react'
import './App.css';
import { themes, backgroundColor, textColor, hoverLinkColor } from './context/Theme'
import styled, { ThemeProvider } from "styled-components";
import {LocaleProvider} from "./context/Locale";
import MainContent from "./components/MainContent";
import Link from "./components/Link";

const Footer = styled.footer`
	background-color: ${backgroundColor};
	color: ${textColor};
	position: relative;
	bottom: 0;
	width: 100%;
	height: 30px;
	text-align: center;
	font-family: 'Ubuntu', sans-serif;
	a:hover {
		color: ${hoverLinkColor};
	}
`
function App() {
	const [theme, setTheme] = useState(themes.light)
	const toggleTheme = () => {
		setTheme(prevTheme => prevTheme === themes.light ? themes.dark : themes.light)
	}

	return (
		<ThemeProvider theme={{theme}}>
		<LocaleProvider>
			<MainContent toggleTheme={toggleTheme}/>
			<Footer>
				Icons made by <Link link="https://www.flaticon.com/authors/smashicons" text="Smashicons" /> from <Link link="https://www.flaticon.com/" text="Flaticon"/>
			</Footer>
		</LocaleProvider>
		</ThemeProvider>
	);
}

export default App;
