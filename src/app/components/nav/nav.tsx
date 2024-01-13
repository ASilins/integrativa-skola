import styles from './nav.module.css';

import { Locale } from '@/i18n.config';
import Link from "next/link";
import { getDictionary } from '@/util/dictionaries';

export default async function Nav({ lang }: { lang: Locale }) {
        const { NAV } = await getDictionary(lang);

        return (
            <nav className={styles.nav}>
                <Link href={`/${lang}`}>
                    Home
                </Link>
                <ul className={styles.navItems}>
                    <Link href={`/${lang}/programs`}>
                        <h6>{NAV.NAV_1}</h6> 
                    </Link>
                    <Link href={`/${lang}/institute`}>
                        <h6>{NAV.NAV_2}</h6> 
                    </Link>
                    <Link href={`/${lang}/educational_institutes`}>
                        <h6>{NAV.NAV_3}</h6> 
                    </Link>
                    <Link href={`/${lang}/library`}>
                        <h6>{NAV.NAV_4}</h6> 
                    </Link>
                </ul>
            </nav>
        )
}