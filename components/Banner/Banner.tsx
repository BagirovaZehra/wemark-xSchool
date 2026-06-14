import styles from "./Banner.module.css";

async function getBannerData() {
  try {
    const res = await fetch('https://admin.wemark.pro/api/tasks-xschool/', {
      cache: 'no-store',
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error occurred while fetching banner data:", error);
    return null;
  }
}

export default async function Banner() {
  const data = await getBannerData();
  if (!data) return null;
  const titleLines = data?.banner_title ? data.banner_title.split('\r\n') : [];

  return (
    <section
      className={styles.bannerSection}
      style={{ backgroundImage: `url(${data?.banner_image})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.bannerContainer}>
        <h1 className={styles.mainTitle}>
          {titleLines.map((line: string, index: number) => (
            <span key={index} className={styles[`line${index + 1}`]}>
              {line}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}