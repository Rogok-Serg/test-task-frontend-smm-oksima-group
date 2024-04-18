import PaymentHistory from 'components/PaymentHistory/PaymentHistory';
import PaymentMethod from 'components/PaymentMethod/PaymentMethod';

const Balance = () => {
  return (
    <div>
      <PaymentMethod />
      <PaymentHistory />
    </div>
  );
};

export default Balance;
