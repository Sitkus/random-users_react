import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  variant: any;
  color: any;
  size: any;
  title: any;
}

const Btn: React.FC<Props> = ({ variant, color, size, title }) => {
  return (
    <Button variant={variant} color={color} size={size}>
      { title }
    </Button>
  );
}

export default Btn;