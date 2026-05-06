import type { Metadata } from "next";

import { WhatBringsYouForm } from "@/components/onboarding/WhatBringsYouForm";

export const metadata: Metadata = {
  title: "What Brings You Here",
};

export default function WhatBringsYouPage() {
  return <WhatBringsYouForm />;
}
