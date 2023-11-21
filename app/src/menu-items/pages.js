// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Páginas',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Autenticação',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          url: '/login',
          target: true
        },
        {
          id: 'register',
          title: 'Cadastre-se',
          type: 'item',
          url: '/cadastro',
          target: true
        }
      ]
    }
  ]
};

export default pages;
