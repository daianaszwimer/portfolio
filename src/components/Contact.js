import React  from 'react';
import styled  from "styled-components";
import Link from "./Link";

const Wrapper = styled.h4`
	display: block;
`;

const Contact = (props) => {
	return (
		<Wrapper>
			{props.name}: <Link link={props.url} title={props.name} text={props.text} />
		</Wrapper>
	)
}

export default Contact;
