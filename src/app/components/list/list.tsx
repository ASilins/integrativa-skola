import styles from './list.module.css';

export default function List( { list }: { list: string[] }) {
    return (
        <div>
            <ol className={ styles.list }>
            {list.map((item, index) => (
                <li key={index} className={ styles.listItem }>
                    {item}
                </li>
                ))}
            </ol>
        </div>
    )
}