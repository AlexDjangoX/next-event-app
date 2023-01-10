import React from 'react';
import Link from 'next/link';
import classes from './Button.module.css';

const Button = ({ exploreLink, children }) => {
  return (
    <Link className={classes.btn} href={exploreLink}>
      {children}
    </Link>
  );
};

export default Button;
