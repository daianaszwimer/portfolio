import React, { useState } from 'react';
import styled, { ThemeContext } from "styled-components";
import {backgroundColor, textColor} from "../themes/themeContext"

const Wrapper = styled.div`
	width: 100%;
`;

const Name = styled.h4`
	cursor: pointer;
`

const Tag = (props) => {
	const [ isOpen, setIsOpen ] = useState(true)

	const handleClick = () => {
		setIsOpen(prevIsOpen => !prevIsOpen)
	}

	return (
		<Wrapper>
			<Name onClick={handleClick}>{`<${props.name}${!!props.closedTag ? '/' : ''}>`}</Name>
			{isOpen &&
				<div>
					{props.children}
				</div>
			}
		</Wrapper>
	)
}

export default Tag;
