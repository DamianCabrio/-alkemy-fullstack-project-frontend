function Transaction({ transaction }) {
  const {amount, createdAt, description, id, type} = transaction;
  return <h5>{amount}</h5>;
}
export default Transaction;
