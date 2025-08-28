"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyLinkProps {
  text: string;
  variant?: 'button' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  onCopy?: (text: string) => void;
  showSuccessMessage?: boolean;
  successMessage?: string;
  successDuration?: number;
}

export default function CopyLink({
  text,
  variant = 'button',
  size = 'md',
  className = '',
  children,
  onCopy,
  showSuccessMessage = true,
  successMessage = 'Copied!',
  successDuration = 2000
}: CopyLinkProps) {
  const [copied, setCopied] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setShowMessage(true);
      
      // Call onCopy callback if provided
      onCopy?.(text);
      
      // Reset copied state after duration
      setTimeout(() => {
        setCopied(false);
        setShowMessage(false);
      }, successDuration);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopied(true);
      setShowMessage(true);
      onCopy?.(text);
      
      setTimeout(() => {
        setCopied(false);
        setShowMessage(false);
      }, successDuration);
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-xs px-2 py-1';
      case 'lg':
        return 'text-base px-4 py-3';
      default:
        return 'text-sm px-3 py-2';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 14;
      case 'lg':
        return 20;
      default:
        return 16;
    }
  };

  const renderButton = () => (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200
        ${getSizeClasses()}
        ${copied 
          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
          : 'bg-white-8 hover:bg-white/12 text-[#A7B5CA] hover:text-white border border-white-8 hover:border-white-16'
        }
        ${className}
      `}
      disabled={copied}
    >
      {copied ? (
        <Check size={getIconSize()} className="text-green-400" />
      ) : (
        <Copy size={getIconSize()} />
      )}
      {children || (copied ? 'Copied!' : 'Copy Link')}
    </button>
  );

  const renderIcon = () => (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center justify-center rounded-lg transition-all duration-200
        ${size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'}
        ${copied 
          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
          : 'bg-white-8 hover:bg-white/12 text-[#A7B5CA] hover:text-white border border-white-8 hover:border-white-16'
        }
        ${className}
      `}
      disabled={copied}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <Check size={getIconSize()} className="text-green-400" />
      ) : (
        <Copy size={getIconSize()} />
      )}
    </button>
  );

  const renderText = () => (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center gap-2 text-[#2283F6] hover:text-[#1a6fd8] transition-colors duration-200
        ${getSizeClasses()}
        ${className}
      `}
      disabled={copied}
    >
      {copied ? (
        <Check size={getIconSize()} className="text-green-400" />
      ) : (
        <Copy size={getIconSize()} />
      )}
      {children || (copied ? 'Copied!' : 'Copy')}
    </button>
  );

  const renderComponent = () => {
    switch (variant) {
      case 'icon':
        return renderIcon();
      case 'text':
        return renderText();
      default:
        return renderButton();
    }
  };

  return (
    <div className="relative inline-block">
      {renderComponent()}
      
      {/* Success Message Tooltip */}
      {showSuccessMessage && showMessage && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-500 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
            {successMessage}
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500"></div>
        </div>
      )}
    </div>
  );
}
