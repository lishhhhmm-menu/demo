import React from 'react';
import { Language } from '../types';
import './LanguageSwitcher.css';

interface LanguageSwitcherProps {
    currentLanguage: Language;
    onLanguageChange: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
    currentLanguage,
    onLanguageChange
}) => {
    const languages: { code: Language; disabled?: boolean }[] = [
        { code: 'en' },
        { code: 'el' },
        { code: 'it' },
    ];

    return (
        <div className="language-switcher">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    className={`lang-btn ${currentLanguage === lang.code ? 'active' : ''} ${lang.disabled ? 'disabled' : ''}`}
                    onClick={() => !lang.disabled && onLanguageChange(lang.code)}
                    disabled={lang.disabled}
                    title={lang.disabled ? 'Coming soon' : ''}
                >
                    {lang.code.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
