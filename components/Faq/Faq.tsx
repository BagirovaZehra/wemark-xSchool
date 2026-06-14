import FaqClient from './FaqClient';

async function getFaqData() {
  const res = await fetch('https://admin.wemark.pro/api/tasks-xschool', { 
    cache: 'no-store' 
  });
  const data = await res.json();
  return data; 
}

export default async function Faq() {
  const faqData = await getFaqData();
  return <FaqClient data={faqData} />;
}