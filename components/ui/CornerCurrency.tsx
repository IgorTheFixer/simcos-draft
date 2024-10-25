"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

interface CornerCurrencyProps {
  value?: string | number | any;
}

const CornerCurrency: React.FC<CornerCurrencyProps> = ({
  value = 0
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // Convert the value from cents to dollars
  const dollarValue = Number(value) / 100;

  return ( 
    <div className="bg-black font-semibold text-white bg-opacity-70 rounded-md px-1">
      {formatter.format(dollarValue)}
    </div>
  );
}

export default CornerCurrency;