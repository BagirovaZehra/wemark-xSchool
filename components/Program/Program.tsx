import styles from './Program.module.css';

async function getProgramData() {
  const res = await fetch('https://admin.wemark.pro/api/tasks-xschool', { cache: 'no-store' });
  const data = await res.json();
  return data.programs[0];
}

export default async function Program() {
  const data = await getProgramData();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{data.title}</h2>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </section>
  );
}