import React, { ReactNode } from 'react';
import Sidebar from '../pages/sidebar/index'; 
import { useSession } from 'next-auth/react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="background.paper"
      >
        <CircularProgress />
      </Box>
    ); 
  }

  return (
    <div className="flex min-h-screen">
      {session && (
        <Sidebar 
          name={session.user?.name || ''} 
          lastname={session.user?.lastname || ''} 
          userRole={session.user?.role || 'admin'} 
        />
      )}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
