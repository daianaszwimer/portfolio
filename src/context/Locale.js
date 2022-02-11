import React, { useState, createContext } from 'react';

import { languageOptions, dictionaryList } from '../locales';

// create the language context with default selected language
export const LocaleContext = createContext({
    userLanguage: 'en',
    dictionary: dictionaryList.en,
});

const LANG_ITEM_NAME = "dsp-lang"

// it provides the language context to app
export function LocaleProvider({ children }) {
    const defaultLanguage = window.localStorage.getItem(LANG_ITEM_NAME);
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');
    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: selected => {
            const newLanguage = languageOptions[selected] ? selected : 'en'
            setUserLanguage(newLanguage);
            window.localStorage.setItem(LANG_ITEM_NAME, newLanguage);
        }
    };

    return (
        <LocaleContext.Provider value={provider}>
            {children}
        </LocaleContext.Provider>
    );
};

