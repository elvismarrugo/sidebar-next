import React, { useState } from 'react';
import Item from '../Item';
import { Links } from '../../Data/Links';
import SubItem from '../SubItem';

import styles from '..//../styles/Sidebar/sidebar.module.scss';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? styles.sidebarOpen : styles.sidebar}>
      <svg className={styles.hamburger} onClick={() => setOpen(!open)} viewBox="0 0 18 12">
        <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#8F8F8F" />
      </svg>
      <div className={styles.linksContainer}>
        {Links &&
          Links.map(({ to, text, svg, more, links }, i) => {
            return more ? <SubItem svg={svg} text={text} key={i} links={links} open={open} /> : <Item key={i} to={to} text={text} svg={svg} open={open} />;
          })}
      </div>
    </div>
  );
};

export default Sidebar;
