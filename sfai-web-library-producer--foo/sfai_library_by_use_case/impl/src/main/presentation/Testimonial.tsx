import React, { useEffect } from "react";
import { Box, Typography, Avatar, Stack, Card, useTheme } from '@mui/material';
import './styles/globals.css';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
}

export function Testimonial({ quote, name, role, company, image }: TestimonialProps) {

    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    useEffect(() => {
    if (isDark) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    }, [isDark]);

  return (
    <Card
      sx={{
        p: 4,
        borderRadius: '20px',
        bgcolor:
          theme.palette.mode === 'dark'
            ? 'transparent'
            : 'var(--surface-glass)',
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--surface-glass-border)',
        boxShadow: 'var(--glass-shadow)',
        transition: 'all 0.3s ease',
      }}
    >
      <Stack spacing={3}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.125rem',
            color: 'var(--text-primary)',
            lineHeight: 1.6,
            fontStyle: 'italic',
            transition: 'color 0.3s',
          }}
        >
          “{quote}”
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            src={image}
            alt={name}
            sx={{
              width: 48,
              height: 48,
              bgcolor: 'var(--accent)',
              backgroundImage: image
                ? 'none'
                : 'linear-gradient(to bottom right, var(--accent), var(--accent-dark))',
              fontWeight: 600,
              fontSize: '1rem',
              color: image ? 'inherit' : '#fff',
            }}
          >
            {!image && name.charAt(0)}
          </Avatar>

          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: 'var(--text-primary)',
                transition: 'color 0.3s',
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'var(--text-secondary)',
                transition: 'color 0.3s',
              }}
            >
              {role} · {company}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
}
