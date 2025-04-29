"use client";

import { useEffect, useState } from "react";

import DeliveryModal from "@/components/ui/DeliveryModal";

const DeliveryProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return ( 
    <>
      <DeliveryModal />
    </>
   );
}
 
export default DeliveryProvider;