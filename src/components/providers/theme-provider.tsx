import React from 'react';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextThemeProvider
            defaultTheme="system"
            attribute="class"
            enableSystem
            themes={['light', 'dark']}
            disableTransitionOnChange
        >
            {children}
        </NextThemeProvider>
    );
};
