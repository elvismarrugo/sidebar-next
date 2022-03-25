import React from 'react';
import Link from 'next/link';
import styles from '..//../styles/Item/item.module.scss';

const Item = ({ to, svg, text, open }) => {
  // console.log({ to, text });
  return (
    <Link href={to} passHref>
      <div className={open ? styles.linkOpen : styles.normal}>
        {svg}
        {open ? <p>{text}</p> : null}
      </div>
    </Link>
  );
};

export default Item;
