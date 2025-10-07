// ButtonSecondary.tsx
import React from 'react';
import Button, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import type { SxProps, Theme } from '@mui/material/styles';

interface Props extends MuiButtonProps {
  sx?: SxProps<Theme>;
}

export default function ButtonSecondary({ children, sx, ...props }: Props) {
  return (
    <Button
      variant="outlined"
      {...props}
      sx={{
        borderRadius: '12px',
        textTransform: 'none',
        px: 3,
        py: 1.25,
        fontWeight: 600,
        borderWidth: '1px',
        minHeight: 44,
        '&:hover': {
          backgroundColor: (theme) => theme.palette.action.hover,
          transform: 'translateY(-1px)',
        },
        ...((sx as any) ?? {}),
      }}
    >
      {children}
    </Button>
  );
}
