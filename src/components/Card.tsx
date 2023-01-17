import styles from "@style/card.module.css";


interface CardProps {
    bgColor?: string;
    children?: any
}

export function Card({bgColor, children}: CardProps) {
    return (
        <div className={styles.card} style={{ backgroundColor: bgColor ?? "#fff"}}>
            {children}
        </div>
    )
}