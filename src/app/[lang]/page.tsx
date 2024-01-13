import styles from './page.module.css';

import { Locale } from '@/i18n.config'
import { getDictionary } from '@/util/dictionaries';
import HeroSection from '../components/sections/hero_section/hero_section';
import FLayout from '../components/sections/f_layout/f_layout';
import HeaderWithCard from '../components/sections/header_with_card/header_with_card';
import ContentCenter from '../components/sections/content_center/content_center';
import Opposing from '../components/sections/opposing/opposing';
import TwoHeadersList from '../components/sections/two_headers_list/two_headers_list';

export default async function Home({
    params: { lang }}: {
    params: { lang: Locale }}) {
    const { HOMEPAGE } = await getDictionary(lang);
    
    return (
        <main>
            <HeroSection title={ HOMEPAGE.TITLE }/>
            <FLayout section={ HOMEPAGE.SECTION_1 } />
            <HeaderWithCard section={ HOMEPAGE.SECTION_2 } />
            <ContentCenter />
            <Opposing items={[
                HOMEPAGE.SECTION_3.TEXT_1,
                HOMEPAGE.SECTION_3.TEXT_2,
                HOMEPAGE.SECTION_3.TEXT_3
            ]}/>
            <TwoHeadersList text={ HOMEPAGE.SECTION_4 }/>
        </main>
    )
}
