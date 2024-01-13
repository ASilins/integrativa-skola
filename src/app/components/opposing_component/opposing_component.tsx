import styles from './opposing_component.module.css';

export default function OpposingComponent({ items }: { items:string[] }) {
    return (
        <div className={ styles.container }>
            {items.map((item, index) => (
                <h4 key={index} className={`${ index % 2 === 0 ? styles.even : styles.odd } ${ styles.text }`}>
                    {item}
                </h4>
            ))}
        </div>
    )
}