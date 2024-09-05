
import React, { ReactNode } from 'react';
import Sidebar from '../pages/sidebar/index'; 
import { useSession } from 'next-auth/react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen">
      {session && <Sidebar name={''} lastname={''} userRole={'admin'} />}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
