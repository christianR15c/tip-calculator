import React from 'react';

const Output = ({ bill, tip }) => {
  const totalBill = bill + tip;
  return (
    <div>
      <h3>
        You pay ${totalBill} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
};

export default Output;
