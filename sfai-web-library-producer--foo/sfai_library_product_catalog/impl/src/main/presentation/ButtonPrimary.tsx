// ButtonPrimary.tsx
import React from 'react';
import Button, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import type { SxProps, Theme } from '@mui/material/styles';

interface Props extends MuiButtonProps {
  sx?: SxProps<Theme>;
}

export default function ButtonPrimary({ children, sx, ...props }: Props) {
  return (
    <Button
      variant="contained"
      {...props}
      sx={{
        borderRadius: '12px',
        textTransform: 'none',
        px: 3,
        py: 1.25,
        fontWeight: 600,
        boxShadow: 'none',
        minHeight: 44,
        '&:hover': {
          boxShadow: 'none',
          transform: 'translateY(-2px)',
        },
        ...((sx as any) ?? {}),
      }}
    >
      {children}
    </Button>
  );
}
