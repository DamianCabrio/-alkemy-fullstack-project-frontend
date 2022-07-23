import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { MdOutlineAddChart } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    name: 'Estadísticas',
    path: '/',
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