"use client";

import { useEffect, useState } from 'react';

import Container from '@/components/ui/Container';
import Footer from '@/components/Footer';
import useCart from '@/hooks/useCart';

import Summary from './components/Summary'
import CartItem from './components/CartItem';

//stops caching
// export const revalidate = 0;

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.uniqueId} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  )
};

export default CartPage;