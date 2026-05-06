import type { Metadata } from "next";

import { AddBankAccountStep } from "@/components/shop-setup/AddBankAccountStep";

export const metadata: Metadata = {
  title: "Add Bank Account",
};

export default function AddBankAccountPage() {
  return <AddBankAccountStep />;
}
