import React, { useContext } from 'react';

import { languageOptions } from '../locales';
import { LocaleContext } from '../context/Locale';
import styled from "styled-components";
import {backgroundColor, textColor} from "../context/Theme";

const Toggle = styled.select`
	position: absolute;
	right: 125px;
	top: 20px;
	font-family: 'Ubuntu',sans-serif;
	padding: 8px;
	background-color: ${backgroundColor};
	color: ${textColor};
	filter: hue-rotate(45deg);
`
export default function LanguageToggle() {
	const { userLanguage, userLanguageChange } = useContext(LocaleContext);

	// set selected language by calling context method
	const handleLanguageChange = e => userLanguageChange(e.target.value);

	return (
		<Toggle
			onChange={handleLanguageChange}
			value={userLanguage}
		>
			{Object.entries(languageOptions).map(([id, name]) => (
				<option key={id} value={id}>{name}</option>
			))}
		</Toggle>
	);
};

