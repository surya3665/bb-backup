import type { ShopSetupStep } from "@/lib/types/shop-setup.types";

export const SHOP_SETUP_STEPS: ShopSetupStep[] = [
  {
    id: "preferences",
    label: "Shop Preferences",
    href: "/shop-setup",
  },
  {
    id: "name",
    label: "Name Your Shop",
    href: "/shop-setup/name-your-shop",
  },
  {
    id: "bank",
    label: "Add Bank Account",
    href: "/shop-setup/add-bank-account",
  },
  {
    id: "ready",
    label: "Your Shop is Ready",
    href: "/shop-setup/ready",
  },
];
