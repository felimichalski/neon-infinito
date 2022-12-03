import { IconChartBar, IconUsers, IconListDetails, IconCirclePlus } from '@tabler/icons'

const navConfig = [
  {
    title: 'Estadísticas',
    path: '/dashboard',
    icon: <IconChartBar />,
  },
  {
    title: 'Usuarios',
    path: '/dashboard/user',
    icon: <IconUsers />,
  },
  {
    title: 'Products',
    path: '/dashboard/products',
    icon: <IconListDetails />,
  },
  {
    title: 'Otros',
    path: '/dashboard/others',
    icon: <IconCirclePlus />,
  }
];

export default navConfig;
