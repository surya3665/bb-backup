import type { Metadata } from "next";

import { NameYourShopStep } from "@/components/shop-setup/NameYourShopStep";

export const metadata: Metadata = {
  title: "Name Your Shop",
};

export default function NameYourShopPage() {
  return <NameYourShopStep />;
}
