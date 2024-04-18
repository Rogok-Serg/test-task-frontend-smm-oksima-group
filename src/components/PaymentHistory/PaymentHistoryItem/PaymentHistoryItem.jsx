import {
  StyledHistoryItem,
  StyledHistoryStatusItem,
  StyledHistoryText,
} from '../PaymentHistory.styled';

const PaymentHistoryItem = ({ item }) => {
  const {
    number,
    dataInvoice,
    paymentTerm,
    status,
    method,
    subscription,
    sum,
  } = item;

  return (
    <>
      <StyledHistoryItem>
        <StyledHistoryText>{number}</StyledHistoryText>
        <StyledHistoryText>{dataInvoice}</StyledHistoryText>
        <StyledHistoryText>{paymentTerm}</StyledHistoryText>
        <StyledHistoryStatusItem>{status}</StyledHistoryStatusItem>
        <StyledHistoryText>{method}</StyledHistoryText>
        <StyledHistoryText>{subscription}</StyledHistoryText>
        <StyledHistoryText>{sum}</StyledHistoryText>
      </StyledHistoryItem>
    </>
  );
};

export default PaymentHistoryItem;
