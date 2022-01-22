import React from 'react';
import style from './layout.module.css';
import Sidebar from './components/Sidebar';

interface LayoutProps {
    children: any;
}

const Layout:React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className={style.layout}>
      <header className={style.header}>
          Cat Challenge
      </header>
      <aside className={style.aside}>
        <Sidebar />
      </aside>
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default Layout;