import { getDictionary } from '@/util/dictionaries';
import styles from './page.module.css';
import { Locale } from '@/i18n.config';

export default async function EducationalInstitute({
    params: { lang }}: {
    params: { lang: Locale }}) {
        const { EDUCATIONAL_INSTITUTES } = await getDictionary(lang);

        return (
            <main>
                <h1>
                    {EDUCATIONAL_INSTITUTES.TEXT}
                </h1>
            </main>
        )
    }