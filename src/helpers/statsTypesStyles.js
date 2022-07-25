import {
  FaArrowDown,
  FaArrowUp,
  FaPizzaSlice,
  FaTshirt,
  FaBus,
  FaMusic,
  FaPlus,
} from 'react-icons/fa';

const statsTypesStyles = {
  groupByTypeStyles: {
    1: {
      icon: <FaArrowDown />,
      color: 'green',
      bgColor: '#8bcf88',
    },
    2: {
      icon: <FaArrowUp />,
      color: 'red',
      bgColor: '#f5c6cb',
    },
  },
  groupByCategoryStyles: {
    1: {
      icon: <FaPizzaSlice />,
      color: '#ff611d',
      bgColor: '#feb66c',
    },
    2: {
      icon: <FaTshirt />,
      color: 'purple',
      bgColor: '#c6b4f0',
    },
    3: {
      icon: <FaBus />,
      color: '#563c0d',
      bgColor: '#b7a585',
    },
    4: {
      icon: <FaMusic />,
      color: '#734f96',
      bgColor: '#c6b4f0',
    },
    5: {
      icon: <FaPlus />,
      color: '#000080',
      bgColor: '#c6b4f0',
    },
  },
};

export default statsTypesStyles;