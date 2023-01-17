import styles from '@style/gift.module.css'

export function Gift(){
    return (
        <div className={styles.gift}>
            <div className={styles.top}></div>
            <div className={styles.body}></div>
            <div className={styles.tie1}></div>
            <div className={styles.tie2}></div>
        </div>
    )
}