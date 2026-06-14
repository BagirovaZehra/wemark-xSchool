import styles from './Founder.module.css';

async function getFounderData() {
  const res = await fetch('https://admin.wemark.pro/api/tasks-xschool', { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function Founder() {
  const data = await getFounderData();

  return (
    <section className={styles.founderSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>FOUNDER</h2>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={data.founders[0].image} alt='founder' />
            <div className={styles.nameTag}>
              <span className={styles.name}>{data.founders[0].name}</span>
              <span className={styles.position}> - {data.founders[0].position}</span>
            </div>
          </div>

          <div className={styles.textWrapper}>
            <h3 className={styles.messageTitle}>{data.founders[0].title}</h3>
            <p className={styles.description}>{data.founders[0].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}