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
    const languages: { code: Language; label: string; disabled?: boolean }[] = [
        { code: 'en', label: 'EN' },
        { code: 'el', label: 'GR' },
        { code: 'it', label: 'IT' },
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
                    {lang.label}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
