import Card from '../../card/card';
import List from '../../list/list';
import styles from './header_with_card.module.css';

type Text = {
    HEADING: string,
    LIST_TITLE: string,
    LIST_ITEMS: {
        ITEM_1: string,
        ITEM_2: string,
        ITEM_3: string,
        ITEM_4: string,
        ITEM_5: string,
        ITEM_6: string,
        ITEM_7: string
    }
}

export default function HeaderWithCard({ section }: { section: Text }) {
    return (
        <section className={ styles.container }>
            <h3 className={ styles.heading }>{ section.HEADING }</h3>

            <Card>
                <h6 className={ styles.listTitle }>{ section.LIST_TITLE }</h6>

                    <List list={[
                            section.LIST_ITEMS.ITEM_1,
                            section.LIST_ITEMS.ITEM_2,
                            section.LIST_ITEMS.ITEM_3,
                            section.LIST_ITEMS.ITEM_4,
                            section.LIST_ITEMS.ITEM_5,
                            section.LIST_ITEMS.ITEM_6,
                            section.LIST_ITEMS.ITEM_7
                        ]} />

                    {/* Make List component */}
                    {/* <ol className={ styles.list }>
                        <li>
                            <p>{ section.LIST_ITEMS.ITEM_1 }</p>
                        </li>
                        <li>
                            <p>{ section.LIST_ITEMS.ITEM_2 }</p>
                        </li>
                        <li>
                            <p>{ section.LIST_ITEMS.ITEM_3 }</p>
                        </li>
                        <li>
                            <p>{ section.LIST_ITEMS.ITEM_4 }</p>
                        </li>
                        <li>
                            <p>{ section.LIST_ITEMS.ITEM_5 }</p>
                        </li>
                        <li>
                            <p>{ section.LIST_ITEMS.ITEM_6 }</p>
                        </li>
                        <li>
                            <p>{ section.LIST_ITEMS.ITEM_7 }</p>
                        </li>
                    </ol> */}
                
            </Card>
        </section>
    )
}