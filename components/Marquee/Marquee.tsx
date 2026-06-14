
import styles from './Marquee.module.css';
import MarqueeClient from './MarqueeClient';

async function getData() {
  const res = await fetch('https://admin.wemark.pro/api/tasks-xschool', { cache: 'no-store' });
  const data = await res.json();
  return data.text_slider;
}

export default async function Marquee() {
  const data = await getData();
return <MarqueeClient data={data} />
}