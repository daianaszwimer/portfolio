import React, { useState } from 'react';
import styled  from "styled-components";
import { hoverColor } from "../context/Theme"

const Wrapper = styled.div`
	width: 100%;
`;

const Name = styled.h4`
	display: inline-block;
	cursor: pointer;
	&:hover {
		color: ${hoverColor};
	}
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
