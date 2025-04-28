import React from 'react';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

export const ThemeProvider = ({ children, forcedTheme }: { children: React.ReactNode; forcedTheme?: string }) => {
    return (
        <NextThemeProvider
            defaultTheme="system"
            attribute="class"
            enableSystem
            themes={['light', 'dark']}
            disableTransitionOnChange
            forcedTheme={forcedTheme}
        >
            {children}
        </NextThemeProvider>
    );
};
