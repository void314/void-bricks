import React from "react";
import { LocaleSwitcherSelect } from "./locale-switcher";
import { useLocale, useTranslations } from "next-intl";

export const LocaleSwitcher = () => {
    const t = useTranslations("LocaleSwitcher");
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect
            defaultValue={locale}
            items={[
                {
                    value: "ru",
                    label: t("ru"),
                },
                {
                    value: "en",
                    label: t("en"),
                },
                {
                    value: "kk",
                    label: t("kk"),
                },
            ]}
            label={t("label")}
        />
    );
};
