import { IconChartBar, IconUsers, IconListDetails, IconCirclePlus } from '@tabler/icons'

const navConfig = [
  {
    title: 'Estadísticas',
    path: '/backoffice',
    icon: <IconChartBar />,
  },
  {
    title: 'Usuarios',
    path: '/backoffice/users',
    icon: <IconUsers />,
  },
  {
    title: 'Products',
    path: '/backoffice/products',
    icon: <IconListDetails />,
  },
  {
    title: 'Otros',
    path: '/backoffice/other',
    icon: <IconCirclePlus />,
  }
];

export default navConfig;
