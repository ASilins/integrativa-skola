import Card from '../../card/card';
import List from '../../list/list';
import styles from './two_headers_list.module.css';

type Text = {
    HEADING: string,
    SUBHEADING: string,
    LIST_ITEMS: {
        ITEM_1: string,
        ITEM_2: string,
        ITEM_3: string,
        ITEM_4: string,
        ITEM_5: string,
    }
}

export default function TwoHeadersList({ text }: { text: Text }) {
    return (
        <section className={ styles.container }>
            <h3 className={ styles.heading }>
                { text.HEADING }
            </h3>
            <Card>
                <h5 className={ styles.subheading }>
                    { text.SUBHEADING }
                </h5>
            </Card>
            <div className={ styles.list }>
                <List list={[
                    text.LIST_ITEMS.ITEM_1,
                    text.LIST_ITEMS.ITEM_2,
                    text.LIST_ITEMS.ITEM_3,
                    text.LIST_ITEMS.ITEM_4,
                    text.LIST_ITEMS.ITEM_5
                ]} />
            </div>
        </section>
    )
}