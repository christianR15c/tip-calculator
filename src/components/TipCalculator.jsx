import React, { useState } from 'react';
import BillInput from './BillInput';
import SelectPercentage from './SelectPercentage';
import Output from './Output';
import Reset from './Reset';

const TipCalculator = () => {
  const [bill, setBill] = useState('');
  const [selfPercent, setSelfPercent] = useState(0);
  const [friendPercent, setFriendPercent] = useState(0);

  const percentageAverage = (selfPercent + friendPercent) / 2;
  const tip = (percentageAverage * bill) / 100;

  const handleReset = () => {
    setBill('');
    setSelfPercent(0);
    setFriendPercent(0);
  };

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={selfPercent} onSelect={setSelfPercent}>
        {' '}
        How did you like the service?{' '}
      </SelectPercentage>
      <SelectPercentage percentage={friendPercent} onSelect={setFriendPercent}>
        How did your friend like the service?{' '}
      </SelectPercentage>
      {bill && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
};

export default TipCalculator;
