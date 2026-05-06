import type { Metadata } from "next";

import { StartYourShopCTA } from "@/components/onboarding/StartYourShopCTA";

export const metadata: Metadata = {
  title: "Start Your Shop",
};

export default function StartYourShopPage() {
  return <StartYourShopCTA />;
}
