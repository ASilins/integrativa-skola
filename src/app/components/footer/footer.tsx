import styles from './footer.module.css';

import { getDictionary } from '@/util/dictionaries';
import { Locale } from '@/i18n.config';
import Link from 'next/link';

export default async function Footer({ lang }: { lang: Locale }) {
    const { FOOTER } = await getDictionary(lang);

    return (
        <footer className={ styles.footer }>
                <ul className={ styles.quickNav }>
                    <Link href={`/${lang}/programs`}>
                        <small>{ FOOTER.NAV_ITEMS.ITEM_1 }</small> 
                    </Link>
                    <Link href={`/${lang}/institute`}>
                        <small>{ FOOTER.NAV_ITEMS.ITEM_2 }</small> 
                    </Link>
                    <Link href={`/${lang}/educational_institutes`}>
                        <small>{ FOOTER.NAV_ITEMS.ITEM_3 }</small> 
                    </Link>
                    <Link href={`/${lang}/library`}>
                        <small>{ FOOTER.NAV_ITEMS.ITEM_4 }</small> 
                    </Link>
                </ul>
            <small>{ FOOTER.COPYRIGHT }</small>
        </footer>
    )
}