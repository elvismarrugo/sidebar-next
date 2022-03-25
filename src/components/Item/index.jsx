import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Item/Item.module.scss';

const Item = ({ to, svg, text, open }) => {
  return (
    <Link href={to} className={open ? styles.linkOpen : styles.normal}>
      <div>
        {svg}
        {open ? <p>{text}</p> : null}
      </div>
    </Link>
  );
};

export default Item;
