import styles from './hero_section.module.css';

type Title = {
    ONE: string,
    TWO: string
}

export default async function HeroSection({ title }: { title: Title }) {
    return (
        <section className={ styles.hero }>
            <div className={ styles.title }>
                <h1>{ title.ONE }</h1>
                <h1>{ title.TWO }</h1>
            </div>
        </section>
    )
}