'use client';

import type { Data } from '@measured/puck';
import { Puck } from '@measured/puck';

import { ThemeProvider } from '@/components/providers/theme-provider';

import config from '../../../puck.config';

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
    return (
        <ThemeProvider forcedTheme="light">
            <Puck
                config={config}
                data={data}
                iframe={{
                    enabled: false,
                }}
                onPublish={async (data) => {
                    await fetch('/puck/api', {
                        method: 'post',
                        body: JSON.stringify({ data, path }),
                    });
                }}
            />
        </ThemeProvider>
    );
}

