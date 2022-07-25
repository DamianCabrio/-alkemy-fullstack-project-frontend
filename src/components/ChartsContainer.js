import React, { useState } from 'react';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { useAppContext } from '../contexts/app/appContext';
import Wrapper from '../styledWrappers/ChartsContainer';

function ChartsContainer() {
  const [isShowBarChart, setIsShowBarChart] = useState(true);
  const { transactionStats } = useAppContext();

  return (
    <Wrapper>
      <h4>Operaciones Mensuales</h4>
      <button type="button" onClick={() => setIsShowBarChart(!isShowBarChart)}>
        {isShowBarChart ? 'Ver gráfico de áreas' : 'Ver gráfico de barra'}
      </button>
      {isShowBarChart && (
        <BarChart data={transactionStats.groupByLastSixMonths} />
      )}
      {!isShowBarChart && (
        <AreaChart data={transactionStats.groupByLastSixMonths} />
      )}
    </Wrapper>
  );
}
export default ChartsContainer;
