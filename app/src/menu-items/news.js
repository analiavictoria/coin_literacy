// assets
import { IconNews } from '@tabler/icons';

// constant
const icons = {
  IconNews
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const news = {
  id: 'news',
  title: 'Notícias',
  type: 'group',
  children: [
    {
      id: 'posts',
      title: 'Últimas notícias',
      type: 'item',
      url: '/news',
      icon: icons.IconNews
    }
  ]
};

export default news;
