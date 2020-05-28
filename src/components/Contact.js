import React, { useContext } from 'react';
import styled, { ThemeContext } from "styled-components";

const Wrapper = styled.h4`
	display: block;
`;

const Contact = (props) => {
	const { theme } = useContext(ThemeContext)
	return (
		<Wrapper>
			{props.name}: <a className={`link-${theme}`} href={props.url} title={props.name} target='_blank' rel="noopener noreferrer">
				{props.text}
			</a>
		</Wrapper>
	)
}

export default Contact;
