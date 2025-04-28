import React from 'react';

import Link from 'next/link';

export const ArticleList = ({ articles }: { articles: { title: string; href?: string }[] }) => {
    return (
        <ul>
            {articles.map(({ title, href }, i) => (
                <li key={i}>{href ? <Link href={href}>{title}</Link> : title}</li>
            ))}
        </ul>
    );
};
