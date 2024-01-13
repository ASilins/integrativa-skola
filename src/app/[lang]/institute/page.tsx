import { getDictionary } from '@/util/dictionaries';
import styles from './page.module.css';
import { Locale } from '@/i18n.config';

export default async function Institute({
    params: { lang }}: {
    params: { lang: Locale }}) {
        const { INSTITUES } = await getDictionary(lang);

        return (
            <main>
                <h1>
                    {INSTITUES.TEXT}
                </h1>
            </main>
        )
    }