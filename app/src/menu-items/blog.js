import { IconArticle } from '@tabler/icons';

// constant
const icons = { IconArticle };

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const blog = {
  id: 'blog',
  title: 'Blog',
  type: 'group',
  children: [
    {
      id: 'post',
      title: 'Postagens',
      type: 'item',
      url: '/blog',
      icon: icons.IconArticle
    }
  ]
};

export default blog;

