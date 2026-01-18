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
    const languages: { code: Language; label: string; flag: string; disabled?: boolean }[] = [
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'el', label: 'Ελληνικά', flag: '🇬🇷' },
        { code: 'it', label: 'Italiano', flag: '🇮🇹', disabled: true },
    ];

    return (
        <div className="language-switcher">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    className={`lang-btn ${currentLanguage === lang.code ? 'active' : ''} ${lang.disabled ? 'disabled' : ''}`}
                    onClick={() => !lang.disabled && onLanguageChange(lang.code)}
                    disabled={lang.disabled}
                    title={lang.disabled ? 'Coming soon' : lang.label}
                >
                    <span className="lang-flag">{lang.flag}</span>
                    <span className="lang-label">{lang.code.toUpperCase()}</span>
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
