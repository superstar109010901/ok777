"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProfileContextType {
  isProfileOpen: boolean;
  setIsProfileOpen: (open: boolean) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

interface ProfileProviderProps {
  children: React.ReactNode;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Close profile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isProfileOpen) {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isProfileOpen]);

  return (
    <ProfileContext.Provider value={{ isProfileOpen, setIsProfileOpen }}>
      {children}
    </ProfileContext.Provider>
  );
};
