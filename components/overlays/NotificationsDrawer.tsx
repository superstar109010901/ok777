"use client";

import React, { useEffect } from 'react';
import NotificationsPanel from "@/components/ui/notification/Panel";

interface Props {
  open: boolean;
  onClose: () => void;
}

const NotificationsDrawer: React.FC<Props> = ({ open, onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent scroll penetration when notifications are open
  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[110]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute bottom-0 right-0 h-[94vh] w-full max-w-[420px] pl-6 translate-x-0 bg-[#0f141c] transition-transform duration-200">
        <NotificationsPanel onClose={onClose} />
      </div>
    </div>
  );
};

export default NotificationsDrawer;


