import React, { useState, useEffect } from 'react';
import { LucideIcon, TrendingUp } from 'lucide-react';
import { Box, Typography, Link, useTheme, Button } from '@mui/material';
import './styles/globals.css';

interface CardProyectoProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
  ctaLink?: string;
}

export function CardProject({
  icon: Icon,
  title,
  description,
  metric,
  ctaLink = '{{link_whatsapp_landing}}',
}: CardProyectoProps) {
  const [isHovered, setIsHovered] = useState(false);
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
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        p: 3,
        borderRadius: '20px',
        bgcolor: 'var(--surface-glass)',
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--surface-glass-border)',
        boxShadow: 'var(--glass-shadow)',
        transition: 'all 0.25s',
        '&:hover': {
          boxShadow: '0 12px 48px rgba(16,24,40,0.12)',
          transform: 'translateY(-4px)',
        },
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '16px',
          backgroundImage: 'linear-gradient(to bottom right, var(--accent)/20, var(--accent)/5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: (theme) =>
            `linear-gradient(
                to bottom right,
                ${theme.palette.mode === 'dark' ? 'rgba(245,158,11,0.2)' : 'var(--accent)/20'},
                ${theme.palette.mode === 'dark' ? 'rgba(245,158,11,0.05)' : 'var(--accent)/5'}
            )`,
        }}
      >
        <Icon style={{ width: 28, height: 28, color: 'var(--accent)' }} />
      </Box>

      {/* Title & Description */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.2,
            transition: 'color 0.2s',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            transition: 'color 0.2s',
          }}
        >
          {description}
        </Typography>
      </Box>

      {/* Metric */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          color: 'var(--accent)',
          fontWeight: 600,
          fontSize: '0.875rem',
        }}
      >
        <TrendingUp style={{ width: 16, height: 16 }} />
        <span>{metric}</span>
      </Box>

      {/* CTA */}
      <Box sx={{ pt: 1, borderTop: '1px solid var(--neutral)' }}>
        {isHovered ? (
          <Button
            href={ctaLink}
            fullWidth
            sx={{
              borderRadius: '20px',
              bgcolor: 'var(--accent)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.875rem',
              '&:hover': {
                bgcolor: 'var(--accent-dark)',
              },
            }}
          >
            Hablar por WhatsApp
          </Button>
        ) : (
          <Link
            href="#"
            sx={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              '&:hover': { color: 'var(--text-primary)' },
              transition: 'color 0.2s',
            }}
          >
            Ver detalles →
          </Link>
        )}
      </Box>
    </Box>
  );
}
