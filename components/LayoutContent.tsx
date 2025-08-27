"use client";

import React, { useState, useEffect } from 'react';
import ResponsiveHeader from "@/components/ResponsiveHeader";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Bottombar from "@/components/Bottombar";
import AuthModal from "@/components/modals/AuthModal";
import UserProfileDropdown from "@/components/ui/notification/Profile";
import { useModal } from "@/context/ModalProvider";
import { useProfile } from "@/context/ProfileProvider";
import { usePathname } from 'next/navigation';
import dynamic from "next/dynamic";
import PageLoader from "@/components/ui/PageLoader";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setInitialLoadComplete } from "@/store/slices/loadingSlice";

const HashHoverLayer = dynamic(() => import("@/components/overlays/HashHoverLayer"), { ssr: false });

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const dispatch = useAppDispatch();
  const { isLoading, isInitialLoad } = useAppSelector((state) => state.loading);
  const { isNotificationsOpen } = useModal();
  const { isProfileOpen, setIsProfileOpen } = useProfile();
  const [isMobileHeader, setIsMobileHeader] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on alliance pages
  const isAlliancePage = pathname?.startsWith('/alliance');

  // Handle initial page load
  useEffect(() => {
    if (isInitialLoad) {
      // First time loading, show loading screen
      const timer = setTimeout(() => {
        dispatch(setInitialLoadComplete());
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad, dispatch]);

  // Prevent scroll when profile menu is open on mobile
  useEffect(() => {
    if (isProfileOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isProfileOpen]);

  // Virtual keyboard state is now handled in the useVirtualKeyboard hook
  // No need for additional body class management here

  // Only show loading on initial app load
  if (isLoading) {
    return <PageLoader message="Loading app..." />;
  }

  return (
    <>
      <ResponsiveHeader onHeaderTypeChange={setIsMobileHeader} />
      <main className={`flex ${isMobileHeader ? 'pt-[56px] sm:pt-[64px]' : 'pt-[56px]'} relative z-10 transition-all duration-300 ${
        isNotificationsOpen && !isMobileHeader ? 'lg:pr-[420px]' : ''
      }`}>
        {!isMobileHeader && <Sidebar />}
        <div className={`main-content ${isMobileHeader ? 'w-full' : ''}`}>
          {children}
          <Footer />
        </div>
        {!isMobileHeader && <HashHoverLayer />}
      </main>
      {!isMobileHeader && !isAlliancePage && !isProfileOpen && <Bottombar />}
      
      {/* Profile Menu - Mobile Full Screen */}
      {isProfileOpen && (
        <>
          {/* Mobile full-screen overlay with blurred background */}
          <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000]"></div>
          {/* Profile menu container */}
          <div className="fixed lg:hidden inset-0 z-[1001] flex items-center justify-center">
            <UserProfileDropdown onClose={() => setIsProfileOpen(false)} />
          </div>
        </>
      )}
      
      <AuthModal />
    </>
  );
}
