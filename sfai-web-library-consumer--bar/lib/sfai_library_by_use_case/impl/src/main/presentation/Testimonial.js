import React, { useEffect } from "react";
import { Box, Typography, Avatar, Stack, Card, useTheme } from '@mui/material';
import './styles/globals.css';
export function Testimonial({ quote, name, role, company, image }) {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
    }, [isDark]);
    return (React.createElement(Card, { sx: {
            p: 4,
            borderRadius: '20px',
            bgcolor: theme.palette.mode === 'dark'
                ? 'transparent'
                : 'var(--surface-glass)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--surface-glass-border)',
            boxShadow: 'var(--glass-shadow)',
            transition: 'all 0.3s ease',
        } },
        React.createElement(Stack, { spacing: 3 },
            React.createElement(Typography, { variant: "body1", sx: {
                    fontSize: '1.125rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    transition: 'color 0.3s',
                } },
                "\u201C",
                quote,
                "\u201D"),
            React.createElement(Stack, { direction: "row", spacing: 2, alignItems: "center" },
                React.createElement(Avatar, { src: image, alt: name, sx: {
                        width: 48,
                        height: 48,
                        bgcolor: 'var(--accent)',
                        backgroundImage: image
                            ? 'none'
                            : 'linear-gradient(to bottom right, var(--accent), var(--accent-dark))',
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: image ? 'inherit' : '#fff',
                    } }, !image && name.charAt(0)),
                React.createElement(Box, null,
                    React.createElement(Typography, { variant: "subtitle1", sx: {
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            transition: 'color 0.3s',
                        } }, name),
                    React.createElement(Typography, { variant: "body2", sx: {
                            color: 'var(--text-secondary)',
                            transition: 'color 0.3s',
                        } },
                        role,
                        " \u00B7 ",
                        company))))));
}
//# sourceMappingURL=Testimonial.js.map