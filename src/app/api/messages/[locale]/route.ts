// app/api/messages/[locale]/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const mes = {
    ru: {
        hello: 'привет',
        LocaleSwitcher: {
            label: 'Language',
            ru: 'Russian',
            en: 'English',
            kk: 'Kazakh',
        },
    },
    en: {
        hello: 'hello',
        LocaleSwitcher: {
            label: 'Language',
            ru: 'Russian',
            en: 'English',
            kk: 'Kazakh',
        },
    },
    kk: {
        hello: 'сәлем',
        LocaleSwitcher: {
            label: 'Language',
            ru: 'Russian',
            en: 'English',
            kk: 'Kazakh',
        },
    },
};
const locales = Object.keys(mes) as Array<keyof typeof mes>;

export async function GET(request: NextRequest, { params }: { params: Promise<{ locale: (typeof locales)[number] }> }) {
    const { locale } = await params;

    const messages = await new Promise<typeof mes.ru>((resolve) => {
        setTimeout(() => resolve(mes[locale]), 1000);
    });

    return NextResponse.json(messages, {
        headers: { 'Cache-Control': 'public, max-age=60' },
    });
}

