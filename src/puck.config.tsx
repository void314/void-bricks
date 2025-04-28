import { useId } from 'react';

import { type Config, DropZone } from '@measured/puck';

import { ArticleList, Footer, Header, LocaleSwitcher, ThemeSwitcher } from './components/modules';

type Props = {
    Conteiner: {};
    Header: {};
    Footer: {};
    HeadingBlock: { title: string; twClasses: string };
    ThemeSwitcher: {};
    LocaleSwitcher: {};
    ArticleList: {
        articles: { title: string; href?: string }[];
    };
};

export const config: Config<Props> = {
    components: {
        Conteiner: {
            defaultProps: {},
            fields: {},
            render: () => {
                return (
                    <div className="container mx-auto flex w-full flex-1 flex-col">
                        <DropZone zone={'content'} />
                    </div>
                );
            },
        },
        Header: {
            fields: {},
            defaultProps: {},
            render: () => <Header />,
        },
        Footer: {
            fields: {},
            defaultProps: {},
            render: () => <Footer />,
        },
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
                        title: { type: 'text', label: 'Title' },
                        href: { type: 'text', label: 'Href (не обезателен)' },
                    },
                    label: 'Articles',
                },
            },
            defaultProps: {
                articles: [
                    { title: 'Article 1', href: '' },
                    { title: 'Article 2', href: '' },
                    { title: 'Article 3', href: '' },
                ],
            },
            render: ({ articles }) => <ArticleList articles={articles} />,
        },
    },
};

export default config;

