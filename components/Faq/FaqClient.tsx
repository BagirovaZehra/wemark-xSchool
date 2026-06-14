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
              className={styles.question} 
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              <span className={styles.btn}>{isOpen ? '-' : '+'}</span>
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