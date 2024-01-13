import { getDictionary } from '@/util/dictionaries';
import styles from './page.module.css';
import { Locale } from '@/i18n.config';

export default async function Library({
    params: { lang }}: {
    params: { lang: Locale }}) {
        const { LIBRARY } = await getDictionary(lang);

        return (
            <main>
                <h1>
                    {LIBRARY.TEXT}
                </h1>
            </main>
        )
    }