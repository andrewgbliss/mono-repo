import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components/views/bid-calculator/Layout';
import { Calculator } from '../../components/views/bid-calculator/Calculator';

const BidCalculator = () => {
  const [showChild, setShowChild] = useState(false);
  const router = useRouter();
  const { id } = router.query;

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
      <Calculator id={id?.toString()} />
    </Layout>
  );
};

export default BidCalculator;
