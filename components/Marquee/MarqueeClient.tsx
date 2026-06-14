"use client";
import styles from './Marquee.module.css';

export default function MarqueeClient({ data }: { data: any }) {
    const items = Object.values(data);
    const repeatedItems = [...items, ...items, ...items];

    return (
        <div className={styles.marqueeWrapper}>
            {/* 1-ci sətir */}
            <div className={styles.track}>
                <div className={styles.inner}>
                    {repeatedItems.map((text: any, i) => (
                        <div key={i} className={styles.item}>
                            <span className={styles.text}>{text}</span>
                            <span className={styles.star}>*</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 2-ci sətir  */}
            <div className={styles.track}>
                <div className={`${styles.inner} ${styles.reverse}`}>
                    {repeatedItems.map((text: any, i) => (
                        <div key={i} className={styles.item}>
                            <span className={styles.text}>{text}</span>
                            <span className={styles.star}>*</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}