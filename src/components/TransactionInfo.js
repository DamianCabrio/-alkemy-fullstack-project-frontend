import Wrapper from '../styledWrappers/TransactionInfo';

function TransactionInfo({ icon, text }) {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
}
export default TransactionInfo;
