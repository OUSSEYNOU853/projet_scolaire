// src/components/ui/tabs.tsx
import React, { useState } from 'react';

// type TabsProps = {
//   defaultValue: string;
//   onValueChange: (value: string) => void;
//   className?: string;
//   children: React.ReactNode;
// };

// export const Tabs: React.FC<TabsProps> = ({
//   defaultValue,
//   onValueChange,
//   className,
//   children,
// }) => {
//   const [activeTab, setActiveTab] = useState(defaultValue);

//   const handleTabChange = (value: string) => {
//     setActiveTab(value);
//     onValueChange(value);
//   };

//   return (
//     <div className={className}>
//       {React.Children.map(children, (child) => {
//         if (React.isValidElement(child) && child.props.value) {
//           return React.cloneElement(child, {
//             isActive: child.props.value === activeTab,
//             onTabChange: handleTabChange,
//           });
//         }
//         return child;
//       })}
//     </div>
//   );
// };

// type TabsListProps = {
//   children: React.ReactNode;
// };

// export const TabsList: React.FC<TabsListProps> = ({ children }) => (
//   <div className="flex space-x-4">{children}</div>
// );

// type TabsTriggerProps = {
//   value: string;
//   isActive?: boolean;
//   onTabChange: (value: string) => void;
//   children: React.ReactNode;
// };

// export const TabsTrigger: React.FC<TabsTriggerProps> = ({
//   value,
//   isActive,
//   onTabChange,
//   children,
// }) => (
//   <button
//     onClick={() => onTabChange(value)}
//     className={`px-4 py-2 font-medium ${isActive ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
//   >
//     {children}
//   </button>
// );

// type TabsContentProps = {
//   value: string;
//   children: React.ReactNode;
//   isActive: boolean;
// };

// export const TabsContent: React.FC<TabsContentProps> = ({
//   value,
//   children,
//   isActive,
// }) => <div className={isActive ? 'block' : 'hidden'}>{children}</div>;

export const Tabs = ({ defaultValue, children, className }: any) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { selectedTab, setSelectedTab });
        }
        return child;
      })}
    </div>
  );
};

export const TabsList = ({ children, selectedTab, setSelectedTab }: any) => (
  <div className="flex border-b">
    {React.Children.map(children, (child) => {
      if (child.type === TabsTrigger) {
        return React.cloneElement(child, { selectedTab, setSelectedTab });
      }
      return child;
    })}
  </div>
);

export const TabsTrigger = ({
  value,
  selectedTab,
  setSelectedTab,
  children,
}: any) => (
  <button
    className={`px-4 py-2 text-sm font-medium ${selectedTab === value ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
    onClick={() => setSelectedTab(value)}
  >
    {children}
  </button>
);

export const TabsContent = ({ value, children }: any) => (
  <div className="p-4">{children}</div>
);
