import React, {useContext} from "react"
import styled, {keyframes} from "styled-components";
import {LocaleContext} from "../context/Locale";

/*
*   transition: 500ms linear;

* */
const shakeEffect = keyframes`
  0% { transform: translateX(1px) rotate(0deg); }
  40% { transform: translateX(-1px)  rotate(-1deg); }
  80% { transform: translateX(-3px)  rotate(1deg); }
  100% { transform: translateX(-1px)  rotate(0deg); }
`
const Element = styled.div`
	backdrop-filter: blur(20px);
	height: 240px;
	width: calc(100% / 3);
	margin: 15px;
	border-radius: 10px;
	padding: 5px 15px;
	border: 1px solid #EFEFEF;
	&:hover {
		animation: ${shakeEffect} 0.5s;
	}
`

const Box = props => {
	const { dictionary } = useContext(LocaleContext);

	return (<Element>
		<h3>{props.title}</h3>
		<span>{dictionary.test}</span>
	</Element>)
}

export default Box