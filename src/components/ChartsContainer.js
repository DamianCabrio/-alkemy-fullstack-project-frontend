import { DateTime } from 'luxon';
import React, { useState } from 'react';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { useAppContext } from '../contexts/app/appContext';
import Wrapper from '../styledWrappers/ChartsContainer';

function ChartsContainer() {
  const [isShowBarChart, setIsShowBarChart] = useState(true);
  const { transactionStats } = useAppContext();

  const data = transactionStats.groupByLastSixMonths.map((item) => {
    const {month, year} = item;
    const paddedMonth = month < 10 ? `0${month}` : month;
    const formattedDate = DateTime.fromISO(
      `${year}-${paddedMonth}`
    ).toLocaleString({ month: 'long', year: 'numeric' });
    return {
      ...item,
      label: formattedDate,
    };
  });

  return (
    <Wrapper>
      <h4>Operaciones Mensuales</h4>
      <button type="button" onClick={() => setIsShowBarChart(!isShowBarChart)}>
        {isShowBarChart ? 'Ver gráfico de áreas' : 'Ver gráfico de barra'}
      </button>
      {isShowBarChart && <BarChart data={data} />}
      {!isShowBarChart && <AreaChart data={data} />}
    </Wrapper>
  );
}
export default ChartsContainer;
