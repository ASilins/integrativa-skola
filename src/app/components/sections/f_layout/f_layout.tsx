import styles from './f_layout.module.css';

type Text = {
    HEADING: string,
    SUBHEADING: string
}

export default function FLayout({ section }: { section: Text}) {
    return (
        <section className={ styles.container}>
            <h2 className={ styles.heading }>{ section.HEADING }</h2>
            <h3 className={ styles.subheading }>{ section.SUBHEADING }</h3>
        </section>
    )
}