import { nanoid } from 'nanoid';
import {
  StyledWrapperHistory,
  StyledTitleHistory,
  StyledHistoryList,
  StyledHistoryTitleItem,
  StyledHistoryTextItem,
  StyledHistoryTitleList,
} from './PaymentHistory.styled';

import HistoryCard from '../../historyCard.json';
import PaymentHistoryItem from './PaymentHistoryItem/PaymentHistoryItem';

const PaymentHistory = () => {
  const id = nanoid();

  return (
    <StyledWrapperHistory>
      <StyledTitleHistory>Historia płatności</StyledTitleHistory>
      <StyledHistoryTitleList>
        <StyledHistoryTitleItem>
          <StyledHistoryTextItem>NO.</StyledHistoryTextItem>
          <StyledHistoryTextItem>Data faktury</StyledHistoryTextItem>
          <StyledHistoryTextItem>Termin zapłaty</StyledHistoryTextItem>
          <StyledHistoryTextItem>Status</StyledHistoryTextItem>
          <StyledHistoryTextItem>Metoda płatności</StyledHistoryTextItem>
          <StyledHistoryTextItem>Subskrypcja</StyledHistoryTextItem>
          <StyledHistoryTextItem>Kwota</StyledHistoryTextItem>
        </StyledHistoryTitleItem>
      </StyledHistoryTitleList>
      <StyledHistoryList>
        {HistoryCard.map(item => (
          <PaymentHistoryItem id={id} item={item} />
        ))}
      </StyledHistoryList>
    </StyledWrapperHistory>
  );
};

export default PaymentHistory;
