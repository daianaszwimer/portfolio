import React, { useContext } from 'react';

import { languageOptions } from '../locales';
import { LocaleContext } from '../context/Locale';

export default function LanguageSelector() {
	const { userLanguage, userLanguageChange } = useContext(LocaleContext);

	// set selected language by calling context method
	const handleLanguageChange = e => userLanguageChange(e.target.value);

	return (
		<select
			onChange={handleLanguageChange}
			value={userLanguage}
		>
			{Object.entries(languageOptions).map(([id, name]) => (
				<option key={id} value={id}>{name}</option>
			))}
		</select>
	);
};

