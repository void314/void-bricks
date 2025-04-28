import { getRequestConfig } from 'next-intl/server';

import { getUserLocale } from '@/services/locale';

export default getRequestConfig(async () => {
    const locale = await getUserLocale();
    // Выполняем запрос к вашему API
    try {
        const res = await fetch(`http://localhost:3000/api/messages/${locale}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            return {
                locale,
                messages: (await import(`../../messages/${locale}.json`)).default,
            };
        }
        const messages = await res.json();
        return { locale, messages };
    } catch (error) {
        return {
            locale,
            messages: (await import(`../../messages/${locale}.json`)).default,
        };
    }
});
