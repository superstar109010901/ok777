"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
}

interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>({ code: 'cn', name: '中文' });

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      try {
        const parsed = JSON.parse(savedLanguage);
        setCurrentLanguage(parsed);
      } catch (error) {
        console.error('Failed to parse saved language:', error);
      }
    }
  }, []);

  // Save language to localStorage when it changes
  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', JSON.stringify(language));
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      setCurrentLanguage: handleLanguageChange 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
