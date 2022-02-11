import React, {useState, useContext} from 'react'
import './App.css';
import { themes } from './themes/themeContext'
import styled, { ThemeProvider } from "styled-components";
import Box from "./components/Box"
import Column from "./components/Column"
import ThemeToggle from "./components/LanguageToggle";
import { LocaleProvider } from "./context/Locale";

const Container = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
    @media (max-width: 750px) {
    	flex-wrap: wrap;
    }
    align-items: center;
    flex-direction: column;
    background: linear-gradient(135deg, #F56476 25%, transparent 25%) -50px 0, linear-gradient(225deg, #F56476 25%, transparent 25%) -50px 0, linear-gradient(315deg,
     #F56476 25%, transparent 25%), linear-gradient(45deg, #F56476 25%, transparent 25%); background-size: 100px 100px;
     background-color: #DFBBB1;
`;

const BoxContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
    flex-wrap: wrap;
`
const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
`
const Footer = styled.footer`
	position: relative;
	width: 100%;
	text-align: center;
	bottom: 5px;
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

	const toggleTheme = () => {
		setTheme(prevTheme => prevTheme === themes.light ? themes.dark : themes.light)
	}
/*
	return (
		<ThemeProvider theme={{theme}}>
			<Container>
				<ThemeToggle handleToggle={toggleTheme}/>
				<Me>
					<Name>Hola, me llamo Daiana Szwimer y soy Full Stack Developer</Name>
					<Picture
						alt='Foto de Daiana'
						src='https://avatars3.githubusercontent.com/u/32345857?s=460&u=2e218a8e8b7dca8deecd219439feec069206784c&v=4'
					/>
					<ContactWrapper>
						<h3>Contacto:</h3>
						<Contact name='LinkedIn' url='https://www.linkedin.com/in/daiana-szwimer/' text='https://www.linkedin.com/in/daiana-szwimer/'/>
						<Contact name='Mail' url='mailto:daiu.szwimer@gmail.com' text='daiu.szwimer@gmail.com'/>
					</ContactWrapper>
				</Me>
				<div className='tag tag-wrapper'>
					<h4>{`<CV>`}</h4>
						<CVItems>
							<Tag
								name='ExperienciaLaboral'
								closedTag
							>
								<TagChild>
									Empecé a trabajar en Febrero de 2017 en <a className={`link-${theme}`} href='https://wearepsh.com' target='_blank' rel="noopener noreferrer" title='PSh'>PSh</a>, donde trabajo actualmente.<br/>
									Entre Febrero y Abril de ese año programé en React Native.<br/>
									A partir de Abril de 2017 y hasta la actualidad, programo en PHP, Node.js y React.js <span role='img' aria-label='red heart'>❤️</span>️<br/>
									De React, soy una de las referentes técnicas en mi proyecto (esta página está hecha con React <span role='img' aria-label='face tongue'>😜️</span>️)<br/>
									Trabajo en el desarrollo de <a className={`link-${theme}`} href='https://nearpod.com/' title='Nearpod' target='_blank' rel="noopener noreferrer">Nearpod</a>.<br/>
								</TagChild>
							</Tag>
							<Tag
								name='Educacion'
								closedTag
							>
								<TagChild>
									Hice mi secundaria en la escuela Técnica ORT entre 2012 y 2016, donde me recibí con honores y con el título de Bachiller Té́cnico con Orientación en Informática y Medios de Comunicación Digitales.<br/>
									Luego, desde 2017 estoy estudiando en la Universidad Tecnológica Nacional la carrera de Ingeniería en Sistemas. Me encuentro cursando materias de tercer y cuarto año.<br/>
								</TagChild>
							</Tag>
							<Tag
								name='Conocimientos'
								closedTag
							>
								<TagChild>
									Tengo conocimientos en: JavaScript (ES6), React, Redux, Next.js, React Router, Typescript, Jest, SQL, T-SQL, CSS, SASS, PHP, Node.js, NestJS, Haskell (paradigma funcional), Prolog (paradigma lógico), C,
									Java, POO, git, microservicios, básicos de Docker, experiencia trabajando con metodologías ágiles (Scrum) y code review (MR/PR),
									patrones de diseño y buenas prácticas de programación (me encantan los códigos prolijos y que cumplen con buenas prácticas).<br/>
								</TagChild>
							</Tag>
							<Tag
								name='Idiomas'
								closedTag
							>
								<TagChild>
									Tengo un inglés fluido.
									En 2014 hice un viaje a Londres con mi secundaria llamado Experience English y tuve clases de inglés en Hampstead School Of English en nivel Advanced (C1).<br/>
									En 2015 rendí el First Certificate in English de Cambridge English y obtuve una nota de 179/190 (Grade B).<br/>
									Actualmente en mi trabajo me comunico con el cliente en inglés -todos los días-.<br/>
								</TagChild>
							</Tag>
							<Tag
								name='Intereses'
								closedTag
							>
								<TagChild>
									Me gusta enseñar, en la empresa donde actualmente trabajo di una charla virtual sobre React Hooks <div onClick={handleToggleVideo} className={`video-toggle-${theme}`}>la podés ver clickeando acá</div>.<br/>
									{renderYoutubeVideo()}
									También me gusta aprender, es por esto que voy a juntadas de programación como MeetupJS, Nerdearla, entre otras. Además, actualmente estoy realizando un <a className={`link-${theme}`} href='https://www.edx.org/course/web-accessibility-introduction' target='_blank' rel="noopener noreferrer" title='Curso de Accesibilidad Web'>curso sobre accesibilidad web</a>.<br/>
									Desde 2019 soy ayudante de la materia Paradigmas de Programación en mi facultad.<br/>
									Entre 2016 y 2018 me desempeñé como líder de grupo en educación no formal de una ONG a cargo de grupo de niños y en 2019 fui coordinadora de ese área.<br/>
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
 */
	const colorOne = "#F4E8C1";
	const colorTwo = "#A0C1B9";
	const colorThree = "#70A0AF";
	const colorFour = "#706993";
	const experience = "Tengo 4 años de experiencia como Full Stack Developer. Me gusta mucho trabajar con React y Node.js. Desde febrero 2017 hasta octubre 2020 trabajé en una software factory llamada PSh (originalmente se llamaba PSF). Actualmente me encuentro trabajando en Distillery";
	const education = "Hice mi secundaria en la escuela Técnica ORT entre 2012 y 2016, donde me recibí con honores y con el título de Bachiller Té́cnico con Orientación en Informática y Medios de Comunicación Digitales.\n" +
		"\tLuego, desde 2017 estoy estudiando en la Universidad Tecnológica Nacional la carrera de Ingeniería en Sistemas, me faltan dos años de carrera."
	const technologies = "JavaScript (ES6), React, Redux, React Router, Typescript, Jest, SQL, T-SQL, CSS, SASS, PHP, Node.js, NestJS, Haskell, Prolog (paradigma lógico), C,\n" +
		"\tJava, POO, git, microservicios, Docker, experiencia trabajando con metodologías ágiles (Scrum) y code review (MR/PR),\n" +
		"\tpatrones de diseño y buenas prácticas de programación (me encanta el código prolijo que cumple con buenas prácticas)";
	const psh = "";
	const distillery = "";

	return (
		<LocaleProvider>
			<Container>
				<ThemeToggle/>
				<Name>dasdasd</Name>
				<BoxContainer>
					<Box text={experience} title="adasjkdak"/>
					<Box text={psh} title="Feb 2017 - Oct 2020"/>
					<Box text={distillery} title="Oct 2020 - Present"/>
					<Box text={education} title="Educación"/>
					<Box text={technologies} title="Tecnologías"/>
				</BoxContainer>
			<Footer>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target='_blank' rel="noopener noreferrer">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon" target='_blank' rel="noopener noreferrer"> www.flaticon.com</a></Footer>
			</Container>
		</LocaleProvider>
	)
}

export default App;
