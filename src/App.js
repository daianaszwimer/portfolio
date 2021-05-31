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

	const toggleTheme = () => {
		setTheme(prevTheme => prevTheme === themes.light ? themes.dark : themes.light)
	}

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
									Tengo 4 años de experiencia como Full Stack Developer. Desde febrero 2017 hasta octubre 2020 trabajé en una software factory llamada <a className={`link-${theme}`} href='https://wearepsh.com' target='_blank' rel="noopener noreferrer" title='PSh'>PSh</a> donde trabajé con React, Jest, PHP, Node.js y un poco de React Native.<br/>
									Desde octubre 2020 hasta marzo 2021 trabajé en <a className={`link-${theme}`} href='https://distillery.com' target='_blank' rel="noopener noreferrer" title='Distillery'>Distillery</a> con Node.js y AWS.<br/>
									Luego trabajé como freelance en <a className={`link-${theme}`} href='https://standardnotes.org' target='_blank' rel="noopener noreferrer" title='Standard Notes'>Standard Notes</a> desde Marzo hasta Mayo 2021 con React y Ruby on Rails.
								</TagChild>
							</Tag>
							<Tag
								name='Educacion'
								closedTag
							>
								<TagChild>
									Hice mi secundaria en la escuela Técnica ORT entre 2012 y 2016, donde me recibí con honores y con el título de Bachiller Té́cnico con Orientación en Informática y Medios de Comunicación Digitales.<br/>
									Luego, desde 2017 estoy estudiando en la Universidad Tecnológica Nacional la carrera de Ingeniería en Sistemas. Me encuentro cursando materias de cuarto año.<br/>
								</TagChild>
							</Tag>
							<Tag
								name='Conocimientos'
								closedTag
							>
								<TagChild>
									Tengo conocimientos en: JavaScript (ES6), React, Redux, Next.js, React Router, Typescript, Jest, SQL, T-SQL, CSS, SASS, PHP, Node.js, NestJS, Haskell (paradigma funcional), Prolog (paradigma lógico), AWS, Ruby,
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
									Dado que siempre trabajé para clientes internacionales, en mi trabajo siempre me comuniqué en inglés<br/>
								</TagChild>
							</Tag>
							<Tag
								name='Intereses'
								closedTag
							>
								<TagChild>
									Me gusta enseñar, es por esto que participo en eventos como speaker:
									<ul>
										<li>
											En la empresa donde trabajaba di una charla virtual sobre React Hooks, <a className={`link-${theme}`} href='https://youtu.be/8u9gtSAV9pI' target='_blank' rel="noopener noreferrer" title='Charla React Hooks de trabajo en Youtube'>la podés ver en Youtube</a><br/>
										</li>
										<li>
											Participé del evento virtual de WWCBA donde expliqué React y React Hooks, <a className={`link-${theme}`} href='https://youtu.be/zW8ExdL14M0?t=2592' target='_blank' rel="noopener noreferrer" title='Charla WWCBA en Youtube'>podés ver la charla en Youtube</a><br/>
										</li>
										<li>
										Otro medio donde enseño conceptos sobre programación es <a className={`link-${theme}`} href='https://www.tiktok.com/@daiuszw' target='_blank' rel="noopener noreferrer" title='TikTok'>TikTok</a><br/>
										</li>
									</ul>
									También me gusta aprender, es por esto que voy a juntadas de programación como MeetupJS, Nerdearla, entre otras. Además, realicé un <a className={`link-${theme}`} href='https://www.linkedin.com/posts/daiana-szwimer_webdevelopment-a11y-accessibility-activity-6795337139757318145-7wy9' target='_blank' rel="noopener noreferrer" title='Curso de Accesibilidad Web'>curso sobre accesibilidad web</a>.<br/>
									Durante 2019 y 2020 fui ayudante de la materia Paradigmas de Programación en mi facultad. Actualmente soy ayudante en la materia Técnicas de Gráficos por Computadora.<br/>
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
