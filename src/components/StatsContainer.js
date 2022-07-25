import StatItem from './StatItem';
import { useAppContext } from '../contexts/app/appContext';
import Wrapper from '../styledWrappers/StatsContainer';
import statsTypesStyles from '../helpers/statsTypesStyles';

function StatsContainer() {
  const { transactionStats } = useAppContext();

  const { groupByTypeStyles, groupByCategoryStyles } = statsTypesStyles;

  return (
    <Wrapper>
      {transactionStats?.groupByType.map((stat) => (
        <StatItem
          key={stat.id}
          stat={stat}
          styles={groupByTypeStyles[stat.id]}
        />
      ))}
      {transactionStats?.groupByCategory.map((stat) => (
        <StatItem
          key={stat.id}
          stat={stat}
          styles={groupByCategoryStyles[stat.id]}
        />
      ))}
    </Wrapper>
  );
}
export default StatsContainer;
