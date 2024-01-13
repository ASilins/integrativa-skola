import { ReactNode } from 'react';
import styles from './ButtonComponent.module.css';

export default function ButtonComponent({type, children}: {type: string, children: ReactNode}) {
    const buttonClass = type === 'primary' ? styles.primary : styles.secondary;

    return (
        <div className={`${styles.button} ${buttonClass}`}>
            <h6>{children}</h6>
        </div>
    )
}