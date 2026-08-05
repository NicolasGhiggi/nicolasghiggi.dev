"use client"

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


const languages = [
    { value: "en", label: "English"  },
    { value: "it", label: "Italiano" },
];


const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();


    const changeLanguage = (locale: string|null) => {
        if (!locale) return

        router.replace(pathname, {
            locale: locale,
        });
    }


    return (
        <Select
            items={languages}
            value={locale}
            onValueChange={changeLanguage}
        >
            <SelectTrigger className="w-30">
                <SelectValue />
            </SelectTrigger>


            <SelectContent>
                <SelectGroup>
                    {languages.map((language) => (
                        <SelectItem key={language.value} value={language.value}>
                            {language.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export { LanguageSwitcher }