import { useState, useEffect } from 'react';
import { Layout } from '../../components/views/bid-calculator/Layout';
import { Calculator } from '../../components/views/bid-calculator/Calculator';

const BidCalculator = () => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  }

  return (
    <Layout>
      <Calculator />
    </Layout>
  );
};

export default BidCalculator;
