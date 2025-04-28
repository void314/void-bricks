import type { Config } from '@measured/puck';

import { ArticleList, LocaleSwitcher, ThemeSwitcher } from './components/modules';

type Props = {
    HeadingBlock: { title: string; twClasses: string };
    ThemeSwitcher: {};
    LocaleSwitcher: {};
    ArticleList: {
        articles: { title: string; href?: string }[];
    };
};

export const config: Config<Props> = {
    components: {
        HeadingBlock: {
            fields: {
                title: { type: 'text' },
                twClasses: { type: 'text' },
            },
            defaultProps: {
                title: 'Heading',
                twClasses: '',
            },
            render: ({ title, twClasses }) => (
                <div className={twClasses}>
                    <h1>{title}</h1>
                </div>
            ),
        },
        ThemeSwitcher: {
            label: 'Theme Switcher',
            fields: {},
            defaultProps: {},
            render: () => <ThemeSwitcher />,
        },
        LocaleSwitcher: {
            label: 'Locale Switcher',
            fields: {},
            defaultProps: {},
            render: () => <LocaleSwitcher />,
        },
        ArticleList: {
            fields: {
                articles: {
                    type: 'array',
                    arrayFields: {
                        title: { type: 'text' },
                        href: { type: 'text' },
                    },
                },
            },
            defaultProps: {
                articles: [
                    { title: 'Article 1', href: '/article/1' },
                    { title: 'Article 2', href: '/article/2' },
                    { title: 'Article 3', href: '/article/3' },
                ],
            },
            render: ({ articles }) => <ArticleList articles={articles} />,
        },
    },
};

export default config;

