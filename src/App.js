import React, {useState} from 'react'
import './App.css';
import { themes, backgroundColor, textColor, hoverLinkColor } from './themes/themeContext'
import styled, { ThemeProvider } from "styled-components";
import ThemeToggle from './components/ThemeToggle'
import Tag from "./components/Tag"
import Contact from "./components/Contact"

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
const CVItems = styled.div`
	margin-left: 15px;
`;
const TagChild = styled.div`
	margin-left: 30px;
	animation: fadein 0.5s;
`
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

function App() {

	const [theme, setTheme] = useState(themes.light)
	const [isYoutubeVideoOpened, setIsYoutubeVideoOpened] = useState(false)

	const renderYoutubeVideo = () => (
		isYoutubeVideoOpened &&
			<>
				<iframe title='React Hooks Tech Talk Video' width="560" height="315" src="https://www.youtube.com/embed/8u9gtSAV9pI" frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen/> <br/>
			</>
	)

	const handleToggleVideo = () => {
		setIsYoutubeVideoOpened(prevValue => !prevValue)
	}

	const toggleTheme = () => {
		setTheme(prevTheme => prevTheme === themes.light ? themes.dark : themes.light)
	}

	return (
		<ThemeProvider theme={{theme}}>
			<Container>
				<ThemeToggle handleToggle={toggleTheme}/>
				<Me>
					<Name>Hi, my name is Daiana and I'm a Full Stack Developer</Name>
					<Picture
						alt='Foto de Daiana'
						src='https://avatars3.githubusercontent.com/u/32345857?s=460&u=2e218a8e8b7dca8deecd219439feec069206784c&v=4'
					/>
					<ContactWrapper>
						<h3>Contact:</h3>
						<Contact name='LinkedIn' url='https://www.linkedin.com/in/daiana-szwimer/' text='https://www.linkedin.com/in/daiana-szwimer/'/>
						<Contact name='Mail' url='mailto:daiu.szwimer@gmail.com' text='daiu.szwimer@gmail.com'/>
					</ContactWrapper>
				</Me>
				<div className='tag tag-wrapper'>
					<h4>{`<CV>`}</h4>
						<CVItems>
							<Tag
								name='WorkExperience'
								closedTag
							>
								<TagChild>
									I started working in 2017 at <a className={`link-${theme}`} href='https://wearepsh.com' target='_blank' rel="noopener noreferrer" title='PSh'>PSh</a> until October 2020.<br/>
									Between February and April of 2017 I worked with React Native.<br/>
									From April 2017 until my last day, my team and were working on building a website for a client named <a className={`link-${theme}`} href='https://nearpod.com/' title='Nearpod' target='_blank' rel="noopener noreferrer">Nearpod</a>. We used PHP, microservices with Node.js and React.js<span role='img' aria-label='red heart'>❤️</span><br/> In React I used libraries like CSSModules, Redux, Jest, React Router and more.️<br/>
									In that project, I was one of React technical references (this page is made in React <span role='img' aria-label='face tongue'>😜️</span>️)<br/>
									Since October 2020 I've been working at <a className={`link-${theme}`} href='https://distillery.com/' target='_blank' rel="noopener noreferrer" title='Distillery'>Distillery</a>. Right now I'm working for a client migrating the codebase to a serverless architecture using: AWS (Lambda, DynamoDB, Cognito, etc), Serverless Framework and Node.js.
								</TagChild>
							</Tag>
							<Tag
								name='Education'
								closedTag
							>
								<TagChild>
									I went to High School at Escuela Técnica ORT between 2012 - 2016, where I graduated with honors specializing in Computer Science and Digital Mass Communications.<br/>
									Then, since 2017 I've been studying at Universidad Tecnológica Nacional the Information Systems Engineering career. In two years I'll graduate.<br/>
								</TagChild>
							</Tag>
							<Tag
								name='Knowledge'
								closedTag
							>
								<TagChild>
									I have experience with: JavaScript (ES6), React, Redux, Redux Sagas, React Hooks, ESLint, Webpack, Typescript, Jest, SQL, T-SQL, CSS, CSSModules, SASS, PHP, Styled Components, Node.js, REST API, websockets, Serverless Framework, NestJS, Haskell, Prolog, C, Java, ORM, git, basic Docker, TDD, AWS, agile methodologies (Scrum) and code reviews (MR/PR), microservices, gRPC,
									designs patterns, functional, logic and object oriented programming, basic knowledge of animation principles and good coding practices.<br/>
								</TagChild>
							</Tag>
							<Tag
								name='Interests'
								closedTag
							>
								<TagChild>
									<ul>
										<li>
											I like teaching! At my previous job I gave a React Hooks talk <a className={`link-${theme}`} href='https://youtu.be/8u9gtSAV9pI' target='_blank' rel="noopener noreferrer" title='React Hooks Talk at PSh'>which you can watch clicking here</a>.
										</li>
										<li>
											I also like learning, that's why I participate in developer communities and attend events like MeetupJS, Nerdearla, among others. In August 2020, I spoke at the Women Who Code Buenos Aires conference about React and React Hooks: <a className={`link-${theme}`} href='https://youtu.be/zW8ExdL14M0?t=2592' target='_blank' rel="noopener noreferrer" title='React Hooks Talk at WWCBA'>click here to watch it</a>
										</li>
										<li>
											I care deeply about diversity in tech.
										</li>
										<li>
											One of my 2021 goals is to participate in more events as a speaker.
										</li>
										<li>
											I want to continue learning and working with React and other Frontend technologies. In the future I want to become a Tech Leader and teach, help and lead my teammates.
										</li>
										<li>
											Since 2019 I've been the Paradigmas de Programación (Paradigms of Programming, it’s a subject) teacher's aide at my university.
										</li>
									</ul>
								</TagChild>
							</Tag>
						</CVItems>
					<h4>{`</CV>`}</h4>
				</div>
			</Container>
			<Footer>
				Icons made by <a className={`link-${theme}`} href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target='_blank' rel="noopener noreferrer">Smashicons</a> from <a className={`link-${theme}`} href="https://www.flaticon.com/" title="Flaticon" target='_blank' rel="noopener noreferrer"> www.flaticon.com</a>
			</Footer>
		</ThemeProvider>
	);
}

export default App;
