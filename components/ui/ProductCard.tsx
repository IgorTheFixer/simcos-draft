"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import CornerCurrency  from "@/components/ui/CornerCurrency";
import IconButton  from "@/components/ui/IconButton";
import usePreviewModal from "@/hooks/usePreviewModal";
import useCart from "@/hooks/useCart";
import { Product } from "@/types";

interface ProductCard {
  data: Product | any
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  
  // stops the onClick on the product card's parent div from triggering
  const onPreview: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };
  // debugger
  // console.log("Test 3", data)
  return ( 
    <div onClick={onPreview} className="bg-white group cursor-pointer rounded-xl border-2 space-x-4 relative flex min-w-fit hover:border-blue-500 hover:bg-gray-100 transition duration-200 ease-in-out active:scale-95">
      <div className="grid grid-cols-2 gap-4 w-full">
        {/* Description */}
        <div className="flex items-center mx-2">
          <p className="font-semibold text-lg">{data?.name}</p>
        </div>
        {/* Image */}
        <div className="min-w-24 min-h-24 h-24 w-24 aspect-square rounded-xl relative">
          {data.image && (
              <Image
                src={data.image}
                alt={data.name}
                fill
                className="aspect-square object-cover rounded-md"
              />
            )}
            <div className="flex absolute top-1 right-1 justify-end">
              <CornerCurrency value={data?.price} />
            </div>
          </div>
        {/* <div className="min-w-24 min-h-24 h-24 aspect-square rounded-xl bg-gray-100 relative"> */}
            {/* <Image
              src={data.image}
              alt={data.name}
              fill
              className="aspect-square object-cover rounded-md"
            /> */}
          {/* </div> */}
        {/* Price & Review */}
      </div>
    </div>
  );
}

export default ProductCard;