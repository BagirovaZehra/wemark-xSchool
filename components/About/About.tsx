import { log } from 'console';
import styles from './About.module.css';
import AboutSlider from './AboutSlider';

async function getAboutData() {
  const res = await fetch('https://admin.wemark.pro/api/tasks-xschool/', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return data;



}

export default async function About() {
  const data = await getAboutData();
  console.log(data);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headerRow}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>{data.about_title}</h2>

            </div>
            <a href='#' className={styles.goLink}>
              Go to xSchool
            </a>
          </div>

          <p className={styles.description}>
            {data.about_description}
          </p>

        </div>
        <AboutSlider images={data.about_images} />
      </div>
    </section>
  );
}