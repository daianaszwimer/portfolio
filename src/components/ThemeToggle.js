import React, { useContext } from 'react';
import styled, { ThemeContext } from "styled-components";

const HiddenCheckbox = styled.input`
	visibility: hidden;
	height: 0;
	width: 0;
`;
const Toggle = styled.label`
	cursor: pointer;
	text-indent: -9999px;
	width: 200px;
	height: 100px;
	background: #242B50;
	display: block;
	border-radius: 100px;
	position: relative;
`;

const ThemeToggle = (props) => {
	const { theme } = useContext(ThemeContext)
	return (
		<div className="toggle">
			<HiddenCheckbox type="checkbox" id="switch"/>
			<Toggle htmlFor="switch" className={`toggle-${theme}`} onClick={props.handleToggle}>Toggle</Toggle>
		</div>
	)
}

export default ThemeToggle;
