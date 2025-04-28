'use client';

import { useTransition } from 'react';

import { SelectIcon } from '@radix-ui/react-select';
import { LanguagesIcon } from 'lucide-react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';
import { setUserLocale } from '@/services/locale';

type Props = {
    defaultValue: string;
    items: Array<{ value: string; label: string }>;
    label: string;
};

export const LocaleSwitcherSelect = ({ defaultValue, items, label }: Props) => {
    const [isPending, startTransition] = useTransition();

    function onChange(value: string) {
        const locale = value as Locale;
        startTransition(() => {
            setUserLocale(locale);
        });
    }

    return (
        <Select defaultValue={defaultValue} onValueChange={onChange}>
            <SelectTrigger
                aria-label={label}
                className={cn(
                    'bg-secondary group rounded-sm p-2 transition-colors',
                    isPending && 'pointer-events-none opacity-60'
                )}
            >
                <SelectIcon>
                    <LanguagesIcon className="group-hover:text-primary h-6 w-6 transition-colors" />
                </SelectIcon>
                <SelectValue placeholder="Theme" className="text-secondary-foreground group-hover:text-primary" />
            </SelectTrigger>
            <SelectContent
                align="end"
                className="min-w-[8rem] overflow-hidden rounded-sm py-1 shadow-md"
                position="popper"
            >
                {items.map(({ value, label }) => (
                    <SelectItem
                        key={value}
                        className="data-[highlighted]:bg-accent/70 flex cursor-default items-center px-3 py-2 text-base"
                        value={value}
                    >
                        <span>{label}</span>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
