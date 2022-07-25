import Wrapper from '../styledWrappers/StatItem';

function StatItem({ stat, styles }) {
  const { total, total_amount, name } = stat;
  const { icon, color, bgColor } = styles;

  return (
    <Wrapper color={color} bgColor={bgColor}>
      <header>
        <div>
          <span className="count">${total_amount}</span>
          <span className="count-small">Total: {total}</span>
        </div>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{name}</h5>
    </Wrapper>
  );
}
export default StatItem;
