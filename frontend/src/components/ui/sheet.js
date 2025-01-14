import React from 'react';

// Sheet Component (Modal Overlay)
export const Sheet = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex justify-end z-50" onClick={onClose}>
    {children}
  </div>
);

// SheetContent Component (Sidebar)
export const SheetContent = ({ children }) => (
  <div
    className="w-1/3 bg-white h-full p-4 overflow-y-auto"
    onClick={(e) => e.stopPropagation()} // Prevent clicks inside the sidebar from closing it
  >
    {children}
  </div>
);

// SheetHeader Component
export const SheetHeader = ({ children, onClose }) => (
  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
    {children}
    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
      <X size={20} />
    </button>
  </div>
);

// SheetTitle Component
export const SheetTitle = ({ children }) => (
  <h2 className="text-xl font-bold">{children}</h2>
);

// SheetTrigger Component
export const SheetTrigger = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);