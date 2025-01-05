// src/components/ui/DropdownMenu.tsx
import React, { useState, useEffect, useRef } from 'react';

interface DropdownItemProps {
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownItemProps[];
  title?: string;
  className?: string;
}

export const DropdownItem = ({
  icon,
  label,
  onClick,
  className = '',
}: DropdownItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${className}`}
    >
      {icon && <span className="w-4 h-4 mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export const DropdownMenu = ({
  trigger,
  items,
  title,
  className = '',
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 ${className}`}
        >
          {title && (
            <div className="px-4 py-2 border-b">
              <p className="text-sm font-semibold text-gray-700">{title}</p>
            </div>
          )}

          {items.map((item, index) => (
            <React.Fragment key={index}>
              <DropdownItem {...item} />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
