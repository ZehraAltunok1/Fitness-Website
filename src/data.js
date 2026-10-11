// Non-text data (images, prices, links). The matching text for each item lives
// in i18n.js at the same index.
import heroImg from './images/arkaplan.jpg';
import loseWeightImg from './images/k2.jpg';
import gainWeightImg from './images/k3.jpeg';
import maintainImg from './images/k4.jpg';
import muscleImg from './images/k1.jpeg';
import zehraImg from './images/zehra.png';
import ebruImg from './images/ebru.png';
import blogVideoImg from './images/pars-1485437796.jpg';
import blogPersonalImg from './images/cardio-compressor.png';
import blogEquipmentImg from './images/Kilo-Koruma-Beslenme-Programi.jpg';

export const BRAND = {
  name: 'Fitness GYM',
  email: 'info@fitnessgym.com',
  phone: '+90 212 000 00 00',
  address: 'Taksim, Beyoğlu, İstanbul',
};

// Sections shown in the navbar (the logo links to #home).
export const NAV_IDS = ['programs', 'about', 'trainers', 'schedule', 'plans', 'bmi', 'faq', 'contact'];

// Every section in page order — used by the footer and active-section tracking.
export const SECTION_IDS = [
  'home',
  'programs',
  'about',
  'trainers',
  'schedule',
  'plans',
  'bmi',
  'reviews',
  'faq',
  'blog',
  'contact',
  'join',
];

export const HERO_IMAGE = heroImg;

export const HIGHLIGHT_ICONS = ['fa-user-check', 'fa-clipboard-list', 'fa-apple-whole'];

export const PROGRAMS = [
  { id: 'lose', image: loseWeightImg },
  { id: 'gain', image: gainWeightImg },
  { id: 'maintain', image: maintainImg },
  { id: 'muscle', image: muscleImg },
];

export const FOUNDER = { name: 'Zehra Altunok', image: zehraImg };

// Placeholder trainers — replace with the real team. Role and bio text is in i18n.js.
export const TRAINERS = [
  { name: 'Elif Yılmaz', icon: 'fa-spa', instagram: '#' },
  { name: 'Mert Kaya', icon: 'fa-dumbbell', instagram: '#' },
  { name: 'Deniz Arslan', icon: 'fa-bolt', instagram: '#' },
  { name: 'Selin Demir', icon: 'fa-apple-whole', instagram: '#' },
];

// Weekly group classes, Monday → Sunday. `trainer` is an index into TRAINERS,
// `type` and `level` are keys into t.schedule.classes / t.schedule.levels.
const c = (time, type, trainer, minutes, level = 'all') => ({ time, type, trainer, minutes, level });
export const SCHEDULE = [
  [c('07:00', 'hiit', 2, 45), c('09:30', 'yoga', 0, 60, 'beginner'), c('18:00', 'strength', 1, 60, 'advanced'), c('19:30', 'spinning', 2, 45)],
  [c('07:00', 'pilates', 0, 50), c('12:30', 'functional', 2, 45), c('18:30', 'boxing', 1, 60), c('20:00', 'stretch', 3, 40)],
  [c('07:00', 'spinning', 2, 45), c('10:00', 'pilates', 0, 50, 'beginner'), c('18:00', 'hiit', 2, 45, 'advanced'), c('19:30', 'yoga', 0, 60)],
  [c('07:00', 'functional', 2, 45), c('12:30', 'yoga', 0, 45), c('18:30', 'strength', 1, 60), c('20:00', 'boxing', 1, 60, 'advanced')],
  [c('07:00', 'hiit', 2, 45), c('10:00', 'stretch', 3, 40, 'beginner'), c('18:00', 'spinning', 2, 45), c('19:30', 'pilates', 0, 50)],
  [c('10:00', 'functional', 2, 60), c('11:30', 'yoga', 0, 75), c('14:00', 'boxing', 1, 60, 'beginner')],
  [c('10:30', 'yoga', 0, 60, 'beginner'), c('12:00', 'stretch', 3, 45)],
];

// Placeholder prices — update with the real membership fees.
export const PLANS = [
  { id: 'basic', price: 799 },
  { id: 'standard', price: 1199, featured: true },
  { id: 'premium', price: 1999 },
];

// Replace the placeholder members with real client reviews.
export const REVIEWS = [{ name: 'Ebru Razi', image: ebruImg }, { name: null }, { name: null }];

export const POSTS = [
  { image: blogVideoImg, date: '2023-05-10', url: 'https://www.youtube.com/watch?v=-tld0bc0t3k' },
  {
    image: blogPersonalImg,
    date: '2023-05-10',
    url: 'https://www.udemy.com/course/aletsiz-vucut-agirligi-ile-kas-gelisimi-yag-yakim-kuvvet/',
  },
  { image: blogEquipmentImg, date: '2023-05-10', url: 'https://www.hepsiburada.com/ara?q=fitness+malzemeleri' },
];

export const SOCIALS = [
  { icon: 'fa-instagram', label: 'Instagram', url: '#' },
  { icon: 'fa-facebook-f', label: 'Facebook', url: '#' },
  { icon: 'fa-x-twitter', label: 'X', url: '#' },
  { icon: 'fa-youtube', label: 'YouTube', url: '#' },
];
