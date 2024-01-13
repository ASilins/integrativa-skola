import { getDictionary } from '@/util/dictionaries';
import styles from './programs.module.css';
import { Locale } from '@/i18n.config';
import TwoHeadingsMiddle from '../../components/sections/two_headings_middle/two_headings_middle';
import OpposingWithBody from '../../components/sections/opposing_with_body/opposing_with_body';
import HeadingWithContent from '../../components/sections/heading_with_content/heading_with_content';
import TwoTextWithList from '../../components/sections/two_text_with_list/two_text_with_list';
import ContentCenter from '../../components/sections/content_center/content_center';
import HeadingListWithText from '../../components/sections/heading_list_with_text/heading_list_with_text';

export default async function Programs({
    params: { lang }}: {
    params: { lang: Locale }}) {
        const { PROGRAMS } = await getDictionary(lang);

        return (
            <main>
                <TwoHeadingsMiddle />
                <OpposingWithBody />
                <HeadingWithContent />
                <TwoTextWithList />
                <ContentCenter />
                <HeadingListWithText />
                <ContentCenter />
            </main>
        )
    }