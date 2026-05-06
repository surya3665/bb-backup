import { redirect } from "next/navigation";

import { SIGNUP_ROUTE } from "@/lib/constants/routes";

export default function HomePage() {
  redirect(SIGNUP_ROUTE);
}
