import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Trial Lesson',
    price: '$5',
    tags: 'Lorem ipsum dolor sit amet',
  },
  {
    title: 'One-time session',
    price: '$20',
    tags: 'Vivamus eget imperdiet turpis | Nullam malesuada ligula',
  },
  {
    title: 'Pass for 4 lessons',
    price: '$70',
    tags: 'Curabitur luctus facilisis eros et ultrices',
  },
  {
    title: 'Pass for 6 lessons',
    price: '$90',
    tags: 'Suspendisse maximus sapien nec | Nullam malesuada ligula',
  },
  {
    title: 'Pass for 10 lessons',
    price: '$100',
    tags: 'Lorem ipsum dolor sit amet | Consectetur adipiscing elit',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Our team',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Our Art',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Our experience',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Our history',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
