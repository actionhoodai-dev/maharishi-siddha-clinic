import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingBookButton from './FloatingBookButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Layout;
