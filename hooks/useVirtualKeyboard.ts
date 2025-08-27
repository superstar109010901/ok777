import { useState, useEffect, useRef } from 'react';
import { 
  supportsVisualViewport, 
  getViewportHeight, 
  isMobileDevice, 
  setBodyKeyboardClass,
  ensureViewportMetaTag,
  debounce 
} from '@/utils/virtualKeyboardUtils';

/**
 * Custom hook to detect virtual keyboard visibility on mobile devices
 * @returns Object with virtual keyboard state and detection methods
 */
export function useVirtualKeyboard() {
  const [isVirtualKeyboardOpen, setIsVirtualKeyboardOpen] = useState(false);
  const [initialViewportHeight, setInitialViewportHeight] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = isMobileDevice();

  useEffect(() => {
    // Only run on mobile devices
    if (!isMobile) return;

    // Ensure proper viewport meta tag
    ensureViewportMetaTag();

    // Set initial viewport height
    setInitialViewportHeight(getViewportHeight());

    const handleViewportChange = () => {
      const currentHeight = getViewportHeight();
      const heightDifference = initialViewportHeight - currentHeight;
      
      // Consider virtual keyboard open if viewport height decreased by more than 150px
      // Higher threshold to prevent false positives and screen disappearing
      const isKeyboardOpen = heightDifference > 150;
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Add a longer delay to ensure the keyboard is actually visible and stable
      // This prevents premature hiding of content and page reloads
      timeoutRef.current = setTimeout(() => {
        setIsVirtualKeyboardOpen(isKeyboardOpen);
        setBodyKeyboardClass(isKeyboardOpen);
      }, 500);
    };

    const handleResize = () => {
      // Fallback for browsers without visualViewport API
      const currentHeight = window.innerHeight;
      const heightDifference = initialViewportHeight - currentHeight;
      const isKeyboardOpen = heightDifference > 150;
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Add a longer delay to ensure the keyboard is actually visible and stable
      // This prevents premature hiding of content and page reloads
      timeoutRef.current = setTimeout(() => {
        setIsVirtualKeyboardOpen(isKeyboardOpen);
        setBodyKeyboardClass(isKeyboardOpen);
      }, 500);
    };

    // Debounced resize handler to prevent excessive updates
    const debouncedResize = debounce(handleResize, 100);

    // Handle input focus/blur events for additional detection
    const handleFocus = () => {
      // Don't immediately assume keyboard is open on focus
      // Let the viewport change handle the detection naturally
      // This prevents premature hiding of content
    };

    const handleBlur = () => {
      // When input loses focus, keyboard is likely closed
      // Use a timeout to ensure the keyboard has time to close
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setIsVirtualKeyboardOpen(false);
        setBodyKeyboardClass(false);
      }, 300);
    };

    // Use visualViewport API if available (more accurate)
    if (supportsVisualViewport()) {
      window.visualViewport!.addEventListener('resize', handleViewportChange);
    } else {
      // Fallback to window resize
      window.addEventListener('resize', debouncedResize);
    }

    // Add input event listeners
    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      if (supportsVisualViewport()) {
        window.visualViewport!.removeEventListener('resize', handleViewportChange);
      } else {
        window.removeEventListener('resize', debouncedResize);
      }
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
      
      // Clear timeout on cleanup
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Clean up body class
      setBodyKeyboardClass(false);
    };
  }, [initialViewportHeight, isMobile]);

  // Update initial height when component mounts
  useEffect(() => {
    if (!isMobile) return;

    const updateInitialHeight = () => {
      setInitialViewportHeight(getViewportHeight());
    };

    // Update after a short delay to ensure proper measurement
    const timer = setTimeout(updateInitialHeight, 100);
    
    return () => clearTimeout(timer);
  }, [isMobile]);

  return {
    isVirtualKeyboardOpen,
    // Helper function to get bottom bar positioning class
    getBottomBarClass: (baseClass: string = '') => {
      const keyboardClass = isVirtualKeyboardOpen ? 'keyboard-open' : '';
      return `${baseClass} ${keyboardClass}`.trim();
    }
  };
}
