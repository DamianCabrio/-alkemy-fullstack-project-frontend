import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats, MdOutlineAddChart } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    name: 'Estadísticas',
    path: '/dashboard',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    name: 'Operaciones',
    path: 'operaciones',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    name: 'Nueva operación',
    path: 'agregar',
    icon: <MdOutlineAddChart />,
  },
  {
    id: 4,
    name: 'Perfil',
    path: 'perfil',
    icon: <ImProfile />,
  },
];

export default links;