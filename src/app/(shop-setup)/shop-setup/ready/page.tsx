import type { Metadata } from "next";

import { ShopReadySuccess } from "@/components/shop-setup/ShopReadySuccess";

export const metadata: Metadata = {
  title: "Your Shop Is Ready",
};

export default function ShopReadyPage() {
  return <ShopReadySuccess />;
}
