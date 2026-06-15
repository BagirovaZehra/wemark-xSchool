"use client";
import { useState } from 'react';
import styles from './Faq.module.css';

export default function FaqClient({ data }: { data: any }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const faqList = data.xschool_faq;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{data.faq_title}</h2>

      {faqList.map((item: any, index: number) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div key={index} className={styles.item}>
            <button
              className={`${styles.question} ${isOpen ? styles.active : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <span>{item.question}</span>
              <span className={styles.icon}>
                {isOpen ? <img src="images/minus.svg" alt="-" /> : <img src="images/plus.svg" alt="+" />}
              </span>
            </button>

            {isOpen && (
              <div className={styles.answer}>
                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}