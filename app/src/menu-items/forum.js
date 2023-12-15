
// assets
import { IconMessages } from '@tabler/icons';

// constant
const icons = {
  IconMessages
};

// ==============================|| FORUM MENU ITEMS ||============================== //

const news = {
  id: 'forum',
  title: 'Comunidade',
  type: 'group',
  children: [
    {
        id: 'forum',
        title: 'Fórum',
        type: 'item',
        url: '/recursos/forum',
        icon: icons.IconMessages,
        breadcrumbs: true
      },
  ]
};

export default news;




