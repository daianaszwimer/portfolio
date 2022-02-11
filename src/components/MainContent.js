import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import Contact from "./Contact";
import React, {useContext} from "react";
import styled from "styled-components";
import {backgroundColor, hoverLinkColor, textColor} from "../context/Theme";
import {LocaleContext} from "../context/Locale";
import CVItems from "./CVItems"

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  background-color: ${backgroundColor};
  color: ${textColor};
  min-height: calc(100vh - 30px);
  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
  a:hover {
    color: ${hoverLinkColor};
  }
`;

const Me = styled.div`
	flex: 1 0 auto;
	max-width: 32%;
	text-align: center;
	font-family: 'Ubuntu', sans-serif;
	@media (max-width: 750px) {
		max-width: 100%;
	}
`
const ContactWrapper = styled.div`
	padding: 0 15px;
	text-align: left;
	animation: slideInFromLeft 3s;
`
const Picture = styled.img`
	max-width: 65%;
	border-radius: 50%;
	height: auto;
	animation: slideInFromLeft 2s;
`
const Name = styled.h1`
	animation: slideInFromLeft 1s;
`
const MainContent = ({toggleTheme}) => {
  const { dictionary } = useContext(LocaleContext);

  return (
    <Container>
      <LanguageToggle/>
      <ThemeToggle handleToggle={toggleTheme}/>
      <Me>
        <Name>{dictionary.name}</Name>
        <Picture
          alt="Daiana's Picture"
          src='https://avatars3.githubusercontent.com/u/32345857?s=460&u=2e218a8e8b7dca8deecd219439feec069206784c&v=4'
        />
        <ContactWrapper>
          <h3>{dictionary.contact_title}:</h3>
          <Contact name='LinkedIn' url='https://www.linkedin.com/in/daiana-szwimer/' text='https://www.linkedin.com/in/daiana-szwimer/'/>
          <Contact name='Mail' url='mailto:daiu.szwimer@gmail.com' text='daiu.szwimer@gmail.com'/>
        </ContactWrapper>
      </Me>
      <div className='tag tag-wrapper'>
        <h4>{`<${dictionary.resume}>`}</h4>
        <CVItems/>
        <h4>{`</${dictionary.resume}>`}</h4>
      </div>
    </Container>
  )
}

export default MainContent