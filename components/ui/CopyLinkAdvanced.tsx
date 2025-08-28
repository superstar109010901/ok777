"use client";

import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { Copy, Check, ExternalLink } from 'lucide-react';

interface CopyLinkAdvancedProps {
  text: string;
  variant?: 'button' | 'icon' | 'text' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  onCopy?: (text: string) => void;
  onError?: (error: Error) => void;
  showSuccessMessage?: boolean;
  successMessage?: string;
  successDuration?: number;
  showExternalLink?: boolean;
  externalLinkUrl?: string;
  disabled?: boolean;
  loading?: boolean;
}

export default function CopyLinkAdvanced({
  text,
  variant = 'button',
  size = 'md',
  className = '',
  children,
  onCopy,
  onError,
  showSuccessMessage = true,
  successMessage = 'Copied!',
  successDuration = 2000,
  showExternalLink = false,
  externalLinkUrl,
  disabled = false,
  loading = false
}: CopyLinkAdvancedProps) {
  const { copied, copy, reset } = useCopyToClipboard({
    onCopy,
    onError,
    successDuration
  });

  const handleCopy = async () => {
    if (disabled || loading) return;
    
    const success = await copy(text);
    if (!success) {
      // Handle error case if needed
      console.error('Failed to copy text');
    }
  };

  const handleExternalLink = () => {
    if (externalLinkUrl) {
      window.open(externalLinkUrl, '_blank', 'noopener,noreferrer');
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
        ${disabled || loading 
          ? 'opacity-50 cursor-not-allowed bg-gray-500/20 text-gray-400' 
          : copied 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : 'bg-white-8 hover:bg-white/12 text-[#A7B5CA] hover:text-white border border-white-8 hover:border-white-16'
        }
        ${className}
      `}
      disabled={disabled || loading || copied}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
      ) : copied ? (
        <Check size={getIconSize()} className="text-green-400" />
      ) : (
        <Copy size={getIconSize()} />
      )}
      {children || (copied ? 'Copied!' : loading ? 'Copying...' : 'Copy Link')}
    </button>
  );

  const renderIcon = () => (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center justify-center rounded-lg transition-all duration-200
        ${size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'}
        ${disabled || loading 
          ? 'opacity-50 cursor-not-allowed bg-gray-500/20 text-gray-400' 
          : copied 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : 'bg-white-8 hover:bg-white/12 text-[#A7B5CA] hover:text-white border border-white-8 hover:border-white-16'
        }
        ${className}
      `}
      disabled={disabled || loading || copied}
      title={copied ? 'Copied!' : loading ? 'Copying...' : 'Copy to clipboard'}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
      ) : copied ? (
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
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled || loading || copied}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#2283F6]"></div>
      ) : copied ? (
        <Check size={getIconSize()} className="text-green-400" />
      ) : (
        <Copy size={getIconSize()} />
      )}
      {children || (copied ? 'Copied!' : loading ? 'Copying...' : 'Copy')}
    </button>
  );

  const renderLink = () => (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={handleCopy}
        className={`
          inline-flex items-center gap-2 text-[#2283F6] hover:text-[#1a6fd8] transition-colors duration-200
          ${getSizeClasses()}
          ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
        disabled={disabled || loading || copied}
      >
        {loading ? (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#2283F6]"></div>
        ) : copied ? (
          <Check size={getIconSize()} className="text-green-400" />
        ) : (
          <Copy size={getIconSize()} />
        )}
        {children || (copied ? 'Copied!' : loading ? 'Copying...' : 'Copy')}
      </button>
      
      {showExternalLink && externalLinkUrl && (
        <button
          onClick={handleExternalLink}
          className="inline-flex items-center justify-center text-[#2283F6] hover:text-[#1a6fd8] transition-colors duration-200"
          title="Open in new tab"
        >
          <ExternalLink size={getIconSize()} />
        </button>
      )}
    </div>
  );

  const renderComponent = () => {
    switch (variant) {
      case 'icon':
        return renderIcon();
      case 'text':
        return renderText();
      case 'link':
        return renderLink();
      default:
        return renderButton();
    }
  };

  return (
    <div className="relative inline-block">
      {renderComponent()}
      
      {/* Success Message Tooltip */}
      {showSuccessMessage && copied && (
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
