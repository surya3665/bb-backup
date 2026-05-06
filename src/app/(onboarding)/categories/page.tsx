import type { Metadata } from "next";

import { CategoriesSelect } from "@/components/onboarding/CategoriesSelect";

export const metadata: Metadata = {
  title: "Categories",
};

export default function CategoriesPage() {
  return <CategoriesSelect />;
}
