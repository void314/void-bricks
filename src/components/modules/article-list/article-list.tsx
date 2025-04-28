import React from 'react';

import { toast } from 'sonner';

import Link from 'next/link';

export const ArticleList = ({ articles }: { articles: { title: string; href?: string }[] }) => {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success('Copied to clipboard');
        });
    };
    return (
        <ul>
            {articles.map(({ title, href }, i) => (
                <li onClick={() => copyToClipboard(title)} key={i}>
                    {href ? <Link href={href}>{title}</Link> : title}
                </li>
            ))}
        </ul>
    );
};
