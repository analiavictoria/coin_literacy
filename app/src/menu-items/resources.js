import { IconSchool, IconMessages, IconTools } from '@tabler/icons';
const icons = {
  IconSchool,
  IconMessages,
  IconTools
};

// ==============================|| RESOURCES MENU ITEMS ||============================== //

const resources = {
  id: 'resources',
  title: 'Recursos',
  type: 'group',
  children: [
    {
      id: 'tool',
      title: 'Conversor de criptomoedas',
      type: 'item',
      icon: icons.IconTools,
      url: '/recursos/conversor',
    },
    {
      id: 'learn',
      title: 'Aprenda',
      type: 'item',
      url: '/recursos/aprenda',
      icon: icons.IconSchool,
      breadcrumbs: true
    },
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

export default resources;
