"use client";

import useDeliveryModal from "@/hooks/useDeliveryModal";
import Modal from "@/components/ui/Modal";

import Image from "next/image";
import Link from "next/link";

import UberEatsLogo from "@/public/ubereats.svg"
import DoorDashLogo from "@/public/doordash.svg"
import GrubHubLogo from "@/public/grubhub.svg"

const DeliveryModal = () => {
  const deliveryModal = useDeliveryModal();

  return ( 
    <Modal 
      open={deliveryModal.isOpen} 
      onClose={deliveryModal.onClose}
    >
      <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-6">
        <Link href="https://www.ubereats.com/store/simcos-mattapan/2OY8MOdrRiGLoouS13ziQg?srsltid=AfmBOooej4ZtxbIqX-NXqwXd36vpYgS9Lki7HlOdGrFSUVxwoLp3GyT7" target="_blank" rel="noopener noreferrer">
          <Image src={UberEatsLogo} alt="Uber Eats" className="w-full h-auto hover:opacity-80 transition" />
        </Link>

        <Link href="https://www.doordash.com/store/simco's-boston-321726/424310/?srsltid=AfmBOoqH-n6UC_OeN3-gaM2DrhNbMg-ahas0nMxlKizKnkCnM2IMFHwd" target="_blank" rel="noopener noreferrer">
          <Image src={DoorDashLogo} alt="DoorDash" className="w-full h-auto hover:opacity-80 transition" />
        </Link>

        <Link href="https://www.grubhub.com/restaurant/simcos-blue-hill-ave-1509-blue-hill-avenue-boston/1411211" target="_blank" rel="noopener noreferrer">
          <Image src={GrubHubLogo} alt="Grubhub" className="w-full h-auto hover:opacity-80 transition" />
        </Link>
      </div>
    </Modal>
  );
}
 
export default DeliveryModal;