import React from 'react';
import useStyles from './Box.style';

const Box = () => {
  const classes = useStyles();

  return (
    <article className={classes.box}>
      Box
    </article>
  );
}

export default Box;