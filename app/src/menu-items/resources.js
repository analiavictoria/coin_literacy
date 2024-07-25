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
      id: 'learn',
      title: 'Aprenda',
      type: 'item',
      url: '/recursos/aprenda',
      icon: icons.IconSchool,
      breadcrumbs: true
    },
    {
      id: 'tool',
      title: 'Conversor de criptomoedas',
      type: 'item',
      icon: icons.IconTools,
      url: '/recursos/conversor',
    },
  ]
};

export default resources;
