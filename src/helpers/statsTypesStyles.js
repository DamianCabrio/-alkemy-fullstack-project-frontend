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
      color: '#f5f5f5',
      bgColor: '#f5f5f5',
    },
    2: {
      icon: <FaArrowUp />,
      color: '#f5f5f5',
      bgColor: '#f5f5f5',
    },
  },
  groupByCategoryStyles: {
    1: {
      icon: <FaPizzaSlice />,
      color: '#f5f5f5',
      bgColor: '#f5f5f5',
    },
    2: {
      icon: <FaTshirt />,
      color: '#f5f5f5',
      bgColor: '#f5f5f5',
    },
    3: {
      icon: <FaBus />,
      color: '#f5f5f5',
      bgColor: '#f5f5f5',
    },
    4: {
      icon: <FaMusic />,
      color: '#f5f5f5',
      bgColor: '#f5f5f5',
    },
    5: {
      icon: <FaPlus />,
      color: '#f5f5f5',
      bgColor: '#f5f5f5',
    },
  },
};

export default statsTypesStyles;