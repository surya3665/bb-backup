import type { Metadata } from "next";

import { ShopPreferencesStep } from "@/components/shop-setup/ShopPreferencesStep";

export const metadata: Metadata = {
  title: "Shop Preferences",
};

export default function ShopSetupPage() {
  return <ShopPreferencesStep />;
}
