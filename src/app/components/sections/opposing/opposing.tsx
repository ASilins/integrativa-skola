import OpposingComponent from '../../opposing_component/opposing_component';
import styles from './opposing.module.css';

export default function Opposing({ items }: { items: string[] }) {
    return (
        <section className={ styles.container }>
            <OpposingComponent items={ items }/>
        </section>
    )
}