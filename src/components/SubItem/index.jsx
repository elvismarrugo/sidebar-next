import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles, { subItem } from '..//../styles/SubItem/subitem.module.scss';

const SubItem = ({ links, open, text, svg }) => {

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  // console.log(links);

  const onClick = () => setSubMenuOpen(!subMenuOpen);

  useEffect(() => {
    if (!open) setSubMenuOpen(false);
  }, [open]);

  return (
    <>
      <div className={open ? styles.linkOpen : styles.normal}>
        <div>{svg}</div>
        {open ? (
          <div onClick={onClick}>
            <p>{text}</p>
            <svg className={!subMenuOpen ? styles.arrowTop : styles.arrowDown} height="10" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L3.97 6L0 0H8Z" fill="black" />
            </svg>
          </div>
        ) : null}
      </div>
      <div className={!subMenuOpen ? styles.subLinksContainerClose : styles.subLinksContainer}>
        {subMenuOpen &&
          open &&
          links.map((link) => (
            <Link href={link.to} passHref>
              <div className={styles.subItem}>
                <div>{link.svg}</div>
                <p>{link.text}</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default SubItem;
